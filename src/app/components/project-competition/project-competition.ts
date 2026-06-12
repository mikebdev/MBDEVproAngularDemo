import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-competition',
  imports: [ReactiveFormsModule],
  templateUrl: './project-competition.html',
  styleUrl: './project-competition.css',
})
export class ProjectCompetition {

  constructor() {
    // call the endpoint and get all competitions; this could be button activated and so on.
    this.getAllCompetitions();

  }


  // Reactive Form: Setup form controls
  projectForm: FormGroup = new FormGroup({
    "competitionId": new FormControl(0),
    "title": new FormControl(""),
    "description": new FormControl(""),
    "startDate": new FormControl(""),
    "endDate": new FormControl(""),
    "status": new FormControl("")
  })


  // API
  http = inject(HttpClient);
  competitionList = signal<Competition[]>([]);



  // <summary>
  // GET a list of Competitions. 
  // TEST URL: https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition
  // </summary>
  // <param name=""></param>
  // <returns>competitionList</returns>
  // [HttpGet] - this would be in a service
  // we could pull these DESC or newest at the top and add paging.
  getAllCompetitions() {
    this.http.get("https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition").subscribe({
      next: (result: any) => {
        this.competitionList.set(result)
      }
    });
  }


  // <summary>
  // POST a new Competition. 
  // TEST URL: https://api.freeprojectapi.com/api/ProjectCompetition/competition
  // </summary>
  // <param name="formValue"></param>
  // <returns>result</returns>
  // [HttpPost] - This would go in a service
  saveNewCompetition() {
    const formValue = this.projectForm.value; // reactive form extract the object
    this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/competition", formValue).subscribe({
      next: (result: any) => {
        alert("Competition Created Successfully");
        this.getAllCompetitions();
      },
      error: (error:any) => {
        alert("ERROR:(" + error.error.message + ")" );
      }
    });
  }



  // UPDATE a new Competition. 
  // TEST URL: https://api.freeprojectapi.com/api/ProjectCompetition/update/{competitionId}&formValue
  // </summary>
  // <param name="competitionId"></param>
  // <param name="formValue"></param>
  // <returns>result</returns>
  // [HttpPut] - This would go in a service
  updateCompetition() {
    const formValue = this.projectForm.value; // reactive form extract the object
    this.http.put("https://api.freeprojectapi.com/api/ProjectCompetition/update/" + formValue.competitionId, formValue).subscribe({
      next: (result: any) => {
        alert("Competition Edited Successfully");
        this.getAllCompetitions();
      },
      error: (error:any) => {
        alert("ERROR:(" + error.error.message + ")" );
      }
    });
  }



  
  // DELETE a new Competition. 
  // TEST URL: https://api.freeprojectapi.com/api/ProjectCompetition/delete/{competitionId}
  // </summary>
  // <param name="competitionId"></param>
  // <returns>result</returns>
  // [HttpDelete] - This would go in a service
  deleteCompetition(id: number) {
    const isConfirmed = confirm("Are you sure you want to delete this Competition?");
    alert("competitionID=(" + isConfirmed + ")" + " And id=(" + id + ")"); 
    if (isConfirmed) {
      alert("isConfirmed=(" + id + ")"); // id works here
    this.http.delete("https://api.freeprojectapi.com/api/ProjectCompetition/delete/" + id).subscribe({
      next: (result: any) => {
        alert("Competition Deleted Successfully")
        this.getAllCompetitions();
      },
      error: (error:any) => {
        alert("ERROR:(" + error.error.message + ")" ); // getting undefined error here
      }
    });

    }



  }





  // <summary>
  // EDIT an existing Competition. 
  // Load into edit form when Edit is pressed for a row item
  // </summary>
  // <param name="formValue"></param>
  // <returns>result</returns>
  // [HttpPut] - This would go in a service
onEdit(item: Competition) {
this.projectForm = new FormGroup({
    "competitionId": new FormControl(item.competitionId),
    "title": new FormControl(item.title),
    "description": new FormControl(item.description),
    "startDate": new FormControl(item.startDate),
    "endDate": new FormControl(item.endDate),
    "status": new FormControl(item.status)
});

}





}


// This would go into an Interfaces folder at some point.
export interface Competition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;     // ISO 8601 date string
  endDate: string;       // ISO 8601 date string
  status: string;        // e.g. "Pending", "Active", "Completed"
}
