import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnicornDetailComponent} from './unicorn-detail.component';
import {OlderThanTenGuard} from '../../older-than-ten.guard';
import {UnicornResolver} from './unicorn.resolver';

const routes: Routes = [
    {
        path: ':id',
        component: UnicornDetailComponent,
        canActivate: [OlderThanTenGuard],
        resolve: {
            unicorn: UnicornResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnicornDetailRoutingModule {
}
