import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Master } from '../../service/master';
import { BatchService } from '../../service/batch-service';

@Component({
  selector: 'app-batch-master',
  imports: [FormsModule, DatePipe],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster {

  // Endpoint: https://freeprojectapi.com/api.html
  newBatchObj: Batch = new Batch();
  http = inject(HttpClient);
  //batchList: Batch[] = [];
  batchList = signal<Batch[]>([]); // Using signal for reactive state management



  // service setup: test

  // New since Angular 16 | inject Services
  masterService = inject(Master);
  batchService = inject(BatchService);

  // Constructor Injection
  // constructor(private masterService: Master) {
  //   debugger;
  //   const result = masterService.addNumbers(12,12);
  // }



  constructor() {
    // Normally would not do this in the constructor, but for demo purposes, we can fetch the batch list here
    // this.fetchBatchList();
    const serviceMasterName = this.masterService.serviceName; // just testing.
    const serviceBatchName = this.batchService.serviceName; // just testing.
    const result = this.masterService.addNumbers(50, 25);
    this.getAllBatches();
  }





  //todo: create a service to handle API calls for batch operations (CRUD)
  // Will used Repository pattern to abstract data access logic and make it reusable across components

  //[HttpGet]
  getAllBatches() {
    // this.http.get('https://api.freeprojectapi.com/api/FeesTracking/batches')
    //   .subscribe({
    // next: (response: any) => {
    //   //this.batchList = response;
    //   this.batchList.set(response); // Update the signal with the fetched batch list
    //   console.log('Batch list fetched successfully:', response);
    // },
    // error: (error) => {
    //   console.error('Error fetching batch list:', error);
    // }
    //   });

    // Call to batch service
    this.batchService.getAllBatches().subscribe({
      next: (response: any) => {
        this.batchList.set(response); // Update the signal with the fetched batch list
        console.log('Batch list fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching batch list:', error);
      }
    });
  }

  //[HttpPost]
  onSaveBatch() {
    // this.http.post('https://api.freeprojectapi.com/api/FeesTracking/batches', this.newBatchObj)
    // .subscribe({
    //   next: (result: any) => {
    //     //debugger;
    //     alert('Batch saved successfully:(' + result.message + ').');
    //     console.log('Batch saved successfully:', result);
    //     // Optionally, refresh the batch list or reset the form here
    //     this.getAllBatches();
    //   },
    //   error: (error: any) => {
    //     //debugger;
    //     alert('Error saving batch:(' + error.message + ') Please try again.');
    //     console.error('Error saving batch:', error);
    //   }
    // });

    this.batchService.saveBatch(this.newBatchObj)
      .subscribe({
        next: (result: any) => {
          //debugger;
          alert('Batch saved successfully:(' + result.message + ').');
          console.log('Batch saved successfully:', result);
          this.getAllBatches();
        },
        error: (error: any) => {
          //debugger;
          alert('Error saving batch:(' + error.message + ') Please try again.');
          console.error('Error saving batch:', error);
        }
      });
  }




  onEditBatch(data: Batch) {
    const stringData = JSON.stringify(data);
    const strObject = JSON.parse(stringData);
    console.log('Editing batch with data:', stringData);

    // Populate form with existing batch data for editing
    this.newBatchObj = strObject;
  }


  //[HttpPut("{batchId}")]
  onUpdateBatch() {
    this.http.put("https://api.freeprojectapi.com/api/FeesTracking/batches/" + this.newBatchObj.batchId, this.newBatchObj)
      .subscribe({
        next: (result: any) => {
          //debugger;
          // alert('Batch saved successfully:(' + result.message + ').');
          console.log('Batch saved successfully:', result);
          // Optionally, refresh the batch list or reset the form here
          this.getAllBatches();
        },
        error: (error: any) => {
          //debugger;
          alert('Error saving batch:(' + error.message + ') Please try again.');
          console.error('Error saving batch:', error);
        }
      });

    // .subscribe({
    //   next: (response) => {
    //     console.log('Batch saved successfully:', response);
    //     // Optionally, refresh the batch list or reset the form here
    //   },
    //   error: (error) => {
    //     console.error('Error saving batch:', error);
    //   }
    // });
  }

  //[HttpDelete("{batchId}")]
  onDeleteBatch(id: number) {
    const isConfirmed = confirm("Are you sure you want to delete this record?");
    if (isConfirmed == true) {
      this.http.delete("https://api.freeprojectapi.com/api/FeesTracking/batches/" + id)
        .subscribe({
          next: (result: any) => {
            //debugger;
            // alert('Batch Deleted successfully:(' + result.message + ').');
            console.log('Batch saved successfully:', result);
            // Optionally, refresh the batch list or reset the form here
            this.getAllBatches();
          },
          error: (error: any) => {
            //debugger;
            alert('Error saving batch:(' + error.message + ') Please try again.');
            console.error('Error saving batch:', error);
          }
        });
    }
  }





  //GET: https://api.freeprojectapi.com/api/FeesTracking/batches

  // isEditMode: boolean = false;

  // batchList: Batch[] = [
  //   { batchId: 1, batchName: 'Angular Basics', createdDate: new Date('2026-01-10') },
  //   { batchId: 2, batchName: 'Angular Advanced', createdDate: new Date('2026-03-15') },
  //   { batchId: 3, batchName: 'Angular Pro', createdDate: new Date('2026-05-01') },
  // ];

  // saveBatch() {
  //   if (this.isEditMode) {
  //     const index = this.batchList.findIndex(b => b.batchId === this.newBatchObj.batchId);
  //     if (index !== -1) {
  //       this.batchList[index] = { ...this.newBatchObj };
  //     }
  //   } else {
  //     const nextId = this.batchList.length > 0
  //       ? Math.max(...this.batchList.map(b => b.batchId)) + 1
  //       : 1;
  //     this.batchList.push({ ...this.newBatchObj, batchId: nextId });
  //   }
  //   this.resetForm();
  // }

  // editBatch(batch: Batch) {
  //   this.newBatchObj = { ...batch };
  //   this.isEditMode = true;
  // }

  // deleteBatch(id: number) {
  //   this.batchList = this.batchList.filter(b => b.batchId !== id);
  // }

  // resetForm() {
  //   this.newBatchObj = new Batch();
  //   this.isEditMode = false;
  // }

}

// can put in models folder and import here
class Batch {
  batchId: number = 0;
  batchName: string = '';
  createdDate: Date = new Date();


}
