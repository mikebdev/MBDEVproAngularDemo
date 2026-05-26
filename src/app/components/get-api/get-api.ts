import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetAPI {

  userList: any[] = [];
  productList: any[] = [];

  constructor(private http: HttpClient) {
  }

  //https://jsonplaceholder.typicode.com/users
  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      // console.log(result);
      this.userList = result;
    });
  }

  //https://fake-store-api.mock.beeceptor.com/api/products
  getProducts() { 
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((result: any) => {
      //console.log(result);
      this.productList = result;
    });
  }


}


