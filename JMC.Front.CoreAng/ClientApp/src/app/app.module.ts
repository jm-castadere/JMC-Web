import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { ApiAuthorizationModule } from '../api-authorization/api-authorization.module';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { AuthorizeInterceptor } from "../api-authorization/authorize.interceptor";
import { TechnicComponent } from './technic/technic.component';
import { ProjectComponent } from './project/project.component';
import { CompetenceComponent } from './competence/competence.component';
import { DetailProjectComponent } from './project/detail-project/detail-project.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

@
  NgModule({
    declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      CounterComponent,
      FetchDataComponent,
      TechnicComponent,
      ProjectComponent,
      CompetenceComponent,
      DetailProjectComponent,
      NotfoundComponent
    ],

    imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      ApiAuthorizationModule
    ],
    exports: [
      ApiAuthorizationModule
    ],
    providers: [
      //to set if usser authorized
      { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
    ],

    bootstrap: [AppComponent]
  })
export class AppModule { }
