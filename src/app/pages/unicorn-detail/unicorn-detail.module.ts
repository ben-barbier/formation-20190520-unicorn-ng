import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnicornDetailRoutingModule } from './unicorn-detail-routing.module';
import { UnicornDetailComponent } from './unicorn-detail.component';

@NgModule({
  declarations: [UnicornDetailComponent],
  imports: [
    CommonModule,
    UnicornDetailRoutingModule
  ]
})
export class UnicornDetailModule { }
