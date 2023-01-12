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
  getAllCustomer() {
    return this.httpClient.get(this.finalBaseUrl + '');
  }
}
