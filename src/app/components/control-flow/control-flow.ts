import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Master } from '../../service/master';
import { BatchService } from '../../service/batch-service';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule, NgClass],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeAvl: boolean = false;
  studentTotalMark: number = 0;
  isSuccessDivVisible: WritableSignal<boolean> = signal(false);

  offerList: string[] = [
    "20% off for Bitcoin",
    "15% off for Paypal",
    "10% off for Googlepay"
  ];

  productCategoryList: string[] = [
    "Computer",
    "Microphone",
    "Mouse",
    "Keyboard",
    "Routers",
  ]

  employeeList = [
    { name: 'Jack Dawson', city: 'Tampa', isActive: false },
    { name: 'Jeff Becker', city: 'New York', isActive: false },
    { name: 'Joe Smith', city: 'Baltimore', isActive: true },
    { name: 'Goarge Johnson', city: 'York', isActive: false },
    { name: 'Kevin Flynn', city: 'ENCOM', isActive: true }
  ]


  // service/master: test
  
  // New since Angular 16
  // masterService = inject(Master)
  // batchService = inject(BatchService);

  // Constructor Injection
  constructor(private masterService: Master, private batchService: BatchService) {
    // debugger;
    const serviceMasterName = this.masterService.serviceName; // just testing.
    const serviceBatchName = this.batchService.serviceName; // just testing.
    const result = masterService.addNumbers(12,12);
  }



  toggleDivVIsibility() {
    this.isSuccessDivVisible.set(!this.isSuccessDivVisible());
  }




} // END class ControlFlow
