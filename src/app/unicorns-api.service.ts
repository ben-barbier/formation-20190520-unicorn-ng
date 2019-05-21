import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Unicorn} from './unicorns.model';
import {flatMap, map, mergeMap, pluck, toArray} from 'rxjs/operators';
import {CapacitiesApiService} from './shared/services/capacities-api.service';

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
}
