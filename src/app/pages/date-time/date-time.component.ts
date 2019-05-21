import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators/tap';

@Component({
    selector: 'uni-date-time',
    templateUrl: './date-time.component.html',
    styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit, OnDestroy {

    public time = new Date();
    private unsubscribe = new Subject<void>();

    constructor() {
    }

    ngOnInit() {
        interval(1000).pipe(
            tap(x => console.log('x' + x)),
            takeUntil(this.unsubscribe),
            tap(y => console.log('y' + y)),
            map(() => new Date())
        ).subscribe(d => {
            console.log('ca tourne');
            this.time = d;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
