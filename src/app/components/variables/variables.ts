import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'app-variables',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})

export class Variables {

courseName : string = "MBDEVpro Course";
courseDuration: string = "This course lasts 3 months.";
currentVersion : string = "v.21";
rollNO : number = 121;
productPrice : number = 1200.60;
isActive : boolean = false;
isPresent : boolean = true;
currentDate : Date = new Date();
cityList : string[] = ["Baltimore", "New York", "Washington DC"];
rollNoArray : number[] = [111,222,333,444,555];

studentObj = {
  name: 'Jeff',
  mobile: '555-333-2020',
  email: 'jeff@google.com'
}
studentList = [
{ name: 'Steve', city: 'Baltimore' },
{ name: 'Robert', city: 'Houston' },
{ name: 'Walter', city: 'Encom Tower' }
]

constructor() {
this.courseName = "MBDEVpro Angular Course";

}



}
