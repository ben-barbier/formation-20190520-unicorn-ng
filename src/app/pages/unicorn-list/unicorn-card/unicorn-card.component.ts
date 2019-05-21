import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../../unicorns.model';
import {CartService} from '../../../shared/services/cart.service';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output() delete = new EventEmitter<Unicorn>();

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
    }

    deleteMe() {
        this.delete.emit(this.unicorn);
    }

    favMe() {
        if (this.cartService.isInCart(this.unicorn)) {
            this.cartService.removeUnicornFromCart(this.unicorn);
        } else {
            this.unicorn.name = 'super ' + this.unicorn.name;
            this.cartService.addUnicornToCart(this.unicorn);
        }
    }

    getColor() {
        return this.cartService.isInCart(this.unicorn) ? 'warn' : 'primary';
    }
}
