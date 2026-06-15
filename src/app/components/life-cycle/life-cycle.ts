import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {


  // A callback method that is invoked immediately after the default change detector has
  // checked the directive's data-bound properties for the first time, and before any of
  // the view or content children have been checked. It is invoked only once when the
  // directive is instantiated.
  ngOnInit(): void {
    console.log("ng OnInit")
  }

  // A callback method that is invoked immediately after Angular 
  // has completed initialization of all of the directive's content.
  // It is invoked only once when the directive is instantiated.
  ngAfterContentInit(): void {
    console.log("ng AfterContentInit")
  }

  // A callback method that is invoked immediately after the default change
  // detector has completed checking all of the directive's content.
  ngAfterContentChecked(): void {
    console.log("ng AfterContentChecked")
  }

  // A callback method that is invoked immediately after Angular has completed 
  // initialization of a component's view. It is invoked only once when the view is instantiated.
  ngAfterViewInit(): void {
    console.log("ng AfterViewInit")
  }

  // A callback method that is invoked immediately after the default change detector has completed 
  // one change-check cycle for a component's view.
  ngAfterViewChecked(): void {
    console.log("ng AfterViewChecked")
  }

  // A callback method that performs change-detection, invoked after the default change-detector runs. 
  // See KeyValueDiffers and IterableDiffers for implementing custom change checking for collections.
  ngDoCheck(): void {
    console.log("ng DoCheck")
  }

  // A callback method that performs custom clean-up, invoked immediately before a directive, pipe, or 
  // service instance is destroyed.
  ngOnDestroy(): void {
    console.log("ng OnDestroy")
  }


}
