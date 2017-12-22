import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../auth-guard.service';
import {AuthService} from '../auth-service.service'


import { LoginUsersComponent } from '../login-users/login-users.component';


const loginroutes: Routes = [
  {path: 'login', component: LoginUsersComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(loginroutes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule { }
