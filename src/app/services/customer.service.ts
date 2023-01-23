import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './url';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  finalBaseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.finalBaseUrl = baseUrl + 'customers/';
  }
  loginCustomer(mydata: any) {
    return this.httpClient.post(this.finalBaseUrl + '/login', {
      logAs: 'ctmr',
      email: mydata.email,
      password: mydata.password,
    });
  }
  getAllCustomer() {
    return this.httpClient.get(this.finalBaseUrl + '');
  }
}
