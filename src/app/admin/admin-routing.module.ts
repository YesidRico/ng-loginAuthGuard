import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserManagerComponent } from './user-manager.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

import {AuthGuard} from '../auth-guard.service';


const adminroutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path: '',
                children:[
                    {path: 'users', component: UserManagerComponent},
                    {path: '', component: AdminDashboardComponent}
                ]
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(adminroutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AdminRoutingModule{}