import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UnicornListRoutingModule} from './unicorn-list-routing.module';
import {UnicornListComponent} from './unicorn-list.component';
import {UnicornCardComponent} from './unicorn-card/unicorn-card.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
    declarations: [UnicornListComponent, UnicornCardComponent],
    imports: [
        CommonModule,
        UnicornListRoutingModule,
        MatCardModule,
        MatButtonModule,
    ]
})
export class UnicornListModule {
}
