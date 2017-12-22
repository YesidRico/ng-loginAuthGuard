import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard.component'
import {UserManagerComponent} from './user-manager.component';
import {AdminRoutingModule} from './admin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    UserManagerComponent
  ]
})
export class AdminModule { }
