import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './pages/unicorn-list/unicorn-list.module#UnicornListModule' },
    { path: 'detail', loadChildren: './pages/unicorn-detail/unicorn-detail.module#UnicornDetailModule' },
    { path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule' },
    { path: 'time', loadChildren: './pages/date-time/date-time.module#DateTimeModule' },
    { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
