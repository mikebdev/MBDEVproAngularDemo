import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MBDEVproAngularDemo');
}
