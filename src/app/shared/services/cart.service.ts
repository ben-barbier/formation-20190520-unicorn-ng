import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Unicorn} from '../../unicorns.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart$: BehaviorSubject<Array<Unicorn>> = new BehaviorSubject([]);

    constructor() {
    }

    public addUnicornToCart(unicorn: Unicorn) {
        // this.cart$.next(this.cart$.getValue().concat(unicorn));
        this.cart$.next([...this.cart$.getValue(), unicorn]);
    }

    public removeUnicornFromCart(unicorn: Unicorn) {
        this.cart$.next(
            this.cart$.getValue().filter(u => u.id !== unicorn.id)
        );
    }

    public isInCart(unicorn: Unicorn): boolean {
        return !!this.cart$.getValue().find(u => u.id === unicorn.id);
    }
}
