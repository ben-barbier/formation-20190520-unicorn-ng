import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UnicornsApiService} from './unicorns-api.service';
import {map} from 'rxjs/operators';
import {Unicorn} from './unicorns.model';
import {tap} from 'rxjs/internal/operators/tap';

@Injectable({
    providedIn: 'root'
})
export class OlderThanTenGuard implements CanActivate, CanLoad {

    constructor(private serviceUnicorn: UnicornsApiService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.serviceUnicorn.getOne(next.params.id).pipe(
            tap((unicorn) => {
                next.data = {...next.data, unicorn};
            }),
            map((u: Unicorn) => u.birthyear < 2008)
        );
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
        // return this.serviceUnicorn.getOne(12).pipe(
        //     map((u: Unicorn) => {
        //         return u.birthyear < 2008;
        //     })
        // );
    }
}
