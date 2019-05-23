import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Unicorn} from '../../unicorns.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnicornResolver implements Resolve<Unicorn> {

    constructor() {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return route.data.unicorn;
    }
}
