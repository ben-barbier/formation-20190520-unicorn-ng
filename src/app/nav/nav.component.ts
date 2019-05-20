import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartService} from '../shared/services/cart.service';
import {Unicorn} from '../unicorns.model';

@Component({
    selector: 'uni-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    public cart$: Observable<Unicorn[]> = this.cartSvc.cart$;
    constructor(private breakpointObserver: BreakpointObserver, private cartSvc: CartService) {
    }

}
