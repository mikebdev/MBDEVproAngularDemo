import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})

// In 3 this was changed to SignalComponent, routes was changed
export class Signal {
  //courseName: string = "MBDEVpro Angular"
  courseName = signal("MBDEVpro Angular")
  rollNo = signal(112)
  student = signal({name:'Kevin Flynn', city:'ENCOM'})
  citylist = signal(["Baltimore","Washington DC","York","Houston","Frederick"])

  //strongly type a signal
  //courseDuration: Signal<string> = signal("a string value")

  constructor() {
    console.log('Before :' + this.courseName())
    setTimeout(() => {
      this.courseName.set("ENCOM Angular");
    }, 3000);
    console.log('After :' + this.courseName())
  }

changeCourse() {
this.courseName.set("ENCOM Tower")
}


}



