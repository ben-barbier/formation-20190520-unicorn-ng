import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnicornListComponent} from './unicorn-list.component';

const routes: Routes = [
    {
        path: '',
        component: UnicornListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnicornListRoutingModule { }
