import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-master',
  imports: [],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster {

  //https://freeprojectapi.com/api.html

  // newBatchObj: any = {
  //   "batchId": 0,
  //   "batchName": "string",
  //   "createdDate": "2026-05-21T23:25:12.514Z"
  // }

  newBatchObj: Batch = new Batch();

}

// can put in models folder and import here
class Batch {
  batchId: number = 0;
  batchName: string = '';
  createdDate: Date = new Date();

  // constructor() {
  // this.batchId = 0;
  // this.batchName = '';
  // this.createdDate = new Date();
  // }

} 