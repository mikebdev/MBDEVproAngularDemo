import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-master',
  // imports: [FormsModule, JsonPipe],
  imports: [FormsModule],
  templateUrl: './user-master.html',
  styleUrl: './user-master.css',
})
export class UserMaster {

  userObj = {
    id: 0,
    name: "",
    username: "",
    email: "",
    password: "",
    city: "",
    state: "",
   }





}
