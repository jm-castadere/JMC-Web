import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { ApiAuthorizationModule } from "../api-authorization/api-authorization.module";
import { AuthorizeGuard } from "../api-authorization/authorize.guard";
import { AuthorizeInterceptor } from "../api-authorization/authorize.interceptor";


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
  { path: '', component: HomeComponent },
  { path: '', pathMatch: "full", redirectTo: '/home' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiAuthorizationModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
