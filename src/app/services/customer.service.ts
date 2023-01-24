import { ICarData } from './../interface/customer.schema';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './url';

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
  getAllCustomer() {
    return this.httpClient.get(this.finalBaseUrl + '');
  }

  /*
   * cars
   */
  depositCar(carData: any) {
    const customer_id = localStorage.getItem('user_id');
    return this.httpClient.post(
      this.finalBaseUrl + '/car-depot/' + customer_id,
      carData
    );
  }
}
