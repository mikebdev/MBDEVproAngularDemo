import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  // Service for methods used by multiple components.
  // In this service we can do some of these things, if to much of any; can split into different services, repository pattern, service for each entity.
  // Store Data
  // create API calls
  // create subjects or behavior subjects
  // utility function helpers

  serviceName: string = "Master Service";


  addNumbers(num1: number, num2: number) {
    // would check to make sure we have an integer before calling this function.
    const sum: number = num1 + num2;
    return sum;
  }
















} // END class Master
