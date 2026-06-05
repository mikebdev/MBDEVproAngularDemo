import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
courseName: string = "Angular is fun Course";
cityName: string = "Baltimore";
className = "primary";
inputType = "date";

showWelcomeMessage() {
  alert("Hey this is cool.")  
}

onStateChanged() {
  alert("State Changed")
}

changeCourseName(text:string) {
  this.courseName = text;
}

}
