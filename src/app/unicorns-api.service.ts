import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable, Subject} from 'rxjs';
import {Unicorn} from './unicorns.model';
import {flatMap, map, mergeMap, pluck, toArray} from 'rxjs/operators';
import {CapacitiesApiService} from './shared/services/capacities-api.service';
import {reduce} from 'rxjs/internal/operators/reduce';
import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class UnicornsApiService {

    constructor(
        private http: HttpClient,
        private capacitiesApiService: CapacitiesApiService) {
    }

    private basePath = 'http://0.0.0.0:3000/unicorns';

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(this.basePath)
            .pipe(
                flatMap(e => e),
                map(u => ({...u, weight: u.weight + 10})),
                toArray()
            );
    }

    public getOne(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(this.basePath + '/' + id);
    }

    public get counter(): Subject<number> {
        const socket = io('http://localhost:3101/count');
        const source = new Observable(observer => {
            socket.on('count', (data) => {
                console.log('Received message from Websocket Server');
                observer.next(data);
            });
            return () => {
                socket.disconnect();
            };
        });
        const destination = {
            next: (data: object) => {
                socket.emit('ISawOne');
                // socket.emit('message', JSON.stringify(data));
            },
        };

        return Subject.create(destination, source);
    }

    public getAllWithCapacityLabel(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            mergeMap(u =>
                from(u.capacities).pipe(
                    mergeMap(c => this.capacitiesApiService.getOneCapacity(c)),
                    pluck('label'),
                    toArray(),
                    map((capacities: string[]) => ({...u, capacitiesLabels: capacities}))
                )
            ),
            toArray()
        );
    }

    public deleteOne(unicorn: Unicorn) {
        return this.http.delete(this.basePath + '/' + unicorn.id);
    }

    public getAverageAge(): Observable<number> {
        const currentYear = new Date().getFullYear();
        return this.getAll().pipe(
            flatMap(e => e),
            pluck('birthyear'),
            map((birthyear: number): number => currentYear - birthyear),
            reduce((acc: any, age) => {
                return {
                    sum: acc.sum + age,
                    count: acc.count + 1
                };
            }, {sum: 0, count: 0}),
            map(acc => acc.sum / acc.count),
        );
    }

    public getAverageAge2(): Observable<number> {
        const currentYear = new Date().getFullYear();
        return this.getAll().pipe(
            map(unicorns =>
                unicorns.reduce((acc, u): number => {
                    return acc + currentYear - u.birthyear;
                }, 0) / unicorns.length
            )
        );
    }
}
