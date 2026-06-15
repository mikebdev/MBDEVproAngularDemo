import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
// import { form, Field } from '@angular/forms/signals';
import { FormField, form, required, email, submit, schema } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  // imports: [FormField, JsonPipe],
  imports: [FormField, JsonPipe], // Import FormField directive for template binding
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {

loginModel = signal({email: '', password: ''});
// loginForm = form(this.loginModel);

loginForm = form(this.loginModel, (schema)=>{
required(schema.email,{message: 'A valid Email is Required'}),
email(schema.email,{message: 'Email id not proper'})
required(schema.password,{message: 'Password is Required'})
});
 
} // END SignalForm 



