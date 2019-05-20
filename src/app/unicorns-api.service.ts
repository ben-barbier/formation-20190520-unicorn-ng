import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Unicorn} from './unicorns.model';

@Injectable({
    providedIn: 'root'
})
export class UnicornsApiService {

    constructor(private http: HttpClient) {
    }

    private basePath = 'http://0.0.0.0:3000/unicorns';

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(this.basePath);
    }

    public deleteOne(unicorn: Unicorn) {
        return this.http.delete(this.basePath + '/' + unicorn.id);
    }
}
