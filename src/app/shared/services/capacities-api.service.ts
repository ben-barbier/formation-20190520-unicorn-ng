import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacity} from '../../capacity.model';

@Injectable({
  providedIn: 'root'
})
export class CapacitiesApiService {

    constructor(private http: HttpClient) {
    }

    private basePath = 'http://0.0.0.0:3000/capacities';

    public getOneCapacity(id: number): Observable<Capacity> {
        return this.http.get<Capacity>(this.basePath + '/' + id);
    }
}
