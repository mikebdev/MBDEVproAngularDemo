import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
 })
export class Login {
  loginObj: LoginModel = new LoginModel();
  router = inject(Router)


  // Hard coded for testing
  onLogin() {
    if (this.loginObj.email == 'mbdevpro@mbdevpro.com' && this.loginObj.password == 'letmein') {
      this.router.navigateByUrl("/signal")
    } else {
      alert('Wrong Credentials')
    }
  }

}



// Login Class
class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

}
