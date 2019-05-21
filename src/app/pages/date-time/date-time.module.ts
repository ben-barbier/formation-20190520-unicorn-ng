import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DateTimeRoutingModule} from './date-time-routing.module';
import {DateTimeComponent} from './date-time.component';

@NgModule({
    declarations: [DateTimeComponent],
    imports: [
        CommonModule,
        DateTimeRoutingModule
    ]
})
export class DateTimeModule {
}
