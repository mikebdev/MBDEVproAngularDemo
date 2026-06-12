import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
// Service for the batch-master component
serviceName: string = "Batch Service";

  // 
  http = inject(HttpClient);

  getAllBatches() {
    return this.http.get("https://api.freeprojectapi.com/api/FeesTracking/batches")
  }

  saveBatch(obj: any) {
    return this.http.post("https://api.freeprojectapi.com/api/FeesTracking/batches", obj)
  }

} //END class BatchService
