import { HttpBackend, HttpClient } from '@angular/common/http';
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
  http = inject(HttpClient); // would be in a service



  onLogin() {
    // Hard coded for testing
    // if (this.loginObj.email == 'mbdevpro@mbdevpro.com' && this.loginObj.password == 'letmein') {
    //   this.router.navigateByUrl("/signal")
    // } else {
    //   alert('Wrong Credentials')
    // }
    alert('onLogin() run')
    //debugger;
    // Request URL: https://api.freeprojectapi.com/api/UserApp/login
    this.http.post("https://api.freeprojectapi.com/api/UserApp/login", this.loginObj).subscribe({
      next: (result: any) => {
        //debugger;
        localStorage.setItem('LoggedUserId', result.data.userId);
        localStorage.setItem('LoggedUserEmailId', result.data.emailId);
        //const localData = localStorage.getItem('loggedUserId');
        this.router.navigateByUrl("/signal")
      },
      error: (error: any) => {
        // error handling here
        alert('Email or Password not correct.')
      }

    })







  }
} // END class Login



// Login Class
class LoginModel {
  emailId: string;
  password: string;

  constructor() {
    this.emailId = '';
    this.password = '';
  }





  // Request URL: https://api.freeprojectapi.com/api/UserApp/CreateNewUser
  // {
  //   "userId": 0,
  //   "emailId": "Jack@smith.com",
  //   "fullName": "Jack Smith",
  //   "password": "Letmein"
  // }

  // Response:
  // {
  //   "message": "User Created Successfully",
  //   "result": true,
  //   "data": {
  //     "userId": 0,
  //     "emailId": "Jack@smith.com",
  //     "fullName": "Jack Smith",
  //     "password": "Letmein"
  //   }
  // }



  // Request URL: https://api.freeprojectapi.com/api/UserApp/login
  // {
  //   "emailId": "Jack@smith.com",
  //   "password": "Letmein"
  // }

  // Response:
  // {
  //   "message": "Login Success",
  //   "result": true,
  //   "data": {
  //     "userId": 14426,
  //     "emailId": "Jack@smith.com",
  //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3ODE3MjQxMDcsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.VPtMD5fZit451eko66Vnk_LcscKrR0Hpa8FiwzG5RpI",
  //     "refreshToken": "J/fogSqgGLpAqi9FHJEuoNfCtfMCp1ZjqiWtspD/oB4="
  //   }
  // }



}
