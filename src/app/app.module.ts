import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ApproutesModule} from './approutes/approutes.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import {LoginRoutingModule} from './login-users/login-routing.module'

import { HeaderComponent } from './header/header.component';
import {AdminModule} from './admin/admin.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginUsersComponent,
    HeaderComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    ApproutesModule,
    AdminModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
