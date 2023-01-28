import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './../url';

@Injectable({
  providedIn: 'root',
})
export class WorkshopManagerService {
  static repairsUnconfirmed(): any {
    throw new Error('Method not implemented.');
  }
  finalBaseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.finalBaseUrl = baseUrl + 'workshop-manager';
  }
  repairsUnconfirmed() {
    return this.httpClient.get(baseUrl + 'repairs/unconfirmed');
  }
  insertTodo(todo: any): any {
    try {
      console.log('service');
      console.log(todo);
      this.httpClient
        .post('http://localhost:3000/api/repairs/confirm/222', todo)
        .subscribe((data) => {
          console.log(data);
        });
      console.log('finished');
    } catch (error) {
      console.log(error);
    }
  }
}
