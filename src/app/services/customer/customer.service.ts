import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl, repairsUrls } from './../url';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  finalBaseUrl: string;
  JWTHeader: string = '';
  constructor(private httpClient: HttpClient) {
    this.finalBaseUrl = baseUrl + 'customers';
    if (localStorage.getItem('token'))
      this.JWTHeader = localStorage.getItem('token')!;
  }
  loginCustomer(credentials: any) {
    return this.httpClient.post(this.finalBaseUrl + '/login', {
      logAs: 'ctmr',
      email: credentials.email,
      password: credentials.password,
    });
  }
  configureHeader() {}
  signup(customer: any) {
    customer.credentials = {
      password: customer.password,
      roles: ['ctmr'],
    };
    delete customer.password;
    return this.httpClient.post(this.finalBaseUrl + '', customer);
  }
  //
  getAllCustomer() {
    return this.httpClient.get(this.finalBaseUrl + '', {
      headers: { auth: this.JWTHeader },
    });
  }
  // * car

  depositCar(carData: any) {
    const customer_id = localStorage.getItem('user_id');
    return this.httpClient.post(repairsUrls.insert + customer_id, carData, {
      headers: { auth: this.JWTHeader },
    });
  }
  getRetrievableCar(customerId: any) {
    return this.httpClient.get(baseUrl + 'repairs/retrievable/' + customerId);
  }

  recoverCar(customerIdA: any, repairIdA: any) {
    return this.httpClient.post(baseUrl + 'repairs/recuperation/6', {
      customerId: customerIdA,
      repairId: repairIdA,
    });
  }
  getUnpaidRepairs() {
    const customer_id = localStorage.getItem('user_id');
    return this.httpClient.get(repairsUrls.unpaid + customer_id, {
      headers: { auth: this.JWTHeader },
    });
  }

  // *  bills
  getAllRepairs() {
    const customer_id = localStorage.getItem('user_id');
    console.log(this.JWTHeader);

    return this.httpClient.get(repairsUrls.allRepairs + customer_id, {
      headers: { auth: this.JWTHeader },
    });
  }
  // * bill details
  getBillsDetails(repairId: string) {
    const customer_id = localStorage.getItem('user_id');
    return this.httpClient.get(
      repairsUrls.oneRepairByCustomer + customer_id + '/' + repairId,
      {
        headers: { auth: this.JWTHeader },
      }
    );
  }
  // * avancement
  getAvancement() {
    return this.httpClient.get(baseUrl + 'repairs/undone', {
      headers: { auth: this.JWTHeader },
    });
  }
  getDetailsAvancement(customerId: string, repairId: string) {
    return this.httpClient.get(
      baseUrl + 'repairs/customer/' + customerId + '/' + repairId,
      {
        headers: { auth: this.JWTHeader },
      }
    );
  }
}
