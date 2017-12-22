import { Component } from '@angular/core';
import {AuthService} from '../auth-service.service';
import {Router} from '@angular/router';

@Component({
    template: `
   <div class="container">
   <h1>Admin</h1>
   {{message}}
   <nav class="nav">
       <a class="nav-link" routerLink="./" routerLinkActive="active"
           [routerLinkActiveOptions]="{exact: true}">Dashboard</a>
       <a class="nav-link" routerLink="./users" routerLinkActive="active">Manage users</a>
   </nav>
   <router-outlet></router-outlet>

   <button class="btn" (click)="logout()">logout</button>
   </div>
    `
})
export class AdminComponent {

    message:string;

    constructor(public authService: AuthService, private router: Router) {

    }
    logout() {
        this.message = "trying to log on ..."
        this.authService.logout().subscribe(() =>{

            if(!this.authService.isLoggedIn){

                this.router.navigate(['/login']);
            }
        });
    }
}