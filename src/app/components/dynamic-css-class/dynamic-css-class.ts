import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
myClassName: string = "bg-warning";
isActive: boolean = true;
productPrice = 600;
divBackColor: string = '';
isSidePanel = signal(false);

myCSS = {
  color: 'red',
  'background-color': 'black',
  'font-size': '35px'
}

openSidePanel() {
  this.isSidePanel.set(true)
}

closeSidePanel() {
  this.isSidePanel.set(false)
}


}
