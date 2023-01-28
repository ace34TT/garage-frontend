import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl, repairsUrls } from './../url';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  finalBaseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.finalBaseUrl = baseUrl + 'customers';
  }
  loginCustomer(credentials: any) {
    return this.httpClient.post(this.finalBaseUrl + '/login', {
      logAs: 'ctmr',
      email: credentials.email,
      password: credentials.password,
    });
  }
  signup(customer: any) {
    customer.credentials = {
      password: customer.password,
      roles: ['ctmr'],
    };
    delete customer.password;
    console.log(customer);

    return this.httpClient.post(this.finalBaseUrl + '', customer);
  }

  getAllCustomer() {
    return this.httpClient.get(this.finalBaseUrl + '');
  }

  /*
   * cars
   */
  depositCar(carData: any) {
    const customer_id = localStorage.getItem('user_id');
    return this.httpClient.post(repairsUrls.insert + customer_id, carData);
  }
}
