import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service.service';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent {

  message: string;
  
   constructor(public authService: AuthService, public router: Router) {
   
   }
  
   login() {
     this.message = 'Trying to log in ...';
  
     this.authService.login().subscribe(() => {
       if (this.authService.isLoggedIn) {
         // Get the redirect URL from our auth service
         // If no redirect has been set, use the default
         let redirect = '/admin';
         // Redirect the user
         this.router.navigate([redirect]);
       }

     });
   }
  
   logout() {
     this.authService.logout();
   }

}
