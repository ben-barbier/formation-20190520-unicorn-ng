import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Unicorn} from '../../unicorns.model';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
    selector: 'uni-unicorn-detail',
    templateUrl: './unicorn-detail.component.html',
    styleUrls: ['./unicorn-detail.component.scss']
})
export class UnicornDetailComponent {

    public unicorn$: Observable<Unicorn>;

    constructor(private activatedRoute: ActivatedRoute) {
        this.unicorn$ = activatedRoute.data.pipe(
            pluck('unicorn')
        );
    }

}
