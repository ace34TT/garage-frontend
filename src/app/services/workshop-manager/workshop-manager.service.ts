import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, repairsUrls } from './../url';

@Injectable({
  providedIn: 'root',
})
export class WorkshopManagerService {
  finalBaseUrl: string;
  JWTHeader: string = '';
  constructor(private httpClient: HttpClient) {
    this.finalBaseUrl = baseUrl + 'workshop-manager';
    if (localStorage.getItem('token')) {
      this.JWTHeader = localStorage.getItem('token')!;
    }
  }
  getUnconfirmedRepairs() {
    return this.httpClient.get(repairsUrls.unconfirmed, {
      headers: { auth: this.JWTHeader, userType: '1' },
    });
  }
  confirmRepair(todo: any) {
    return this.httpClient.post(repairsUrls.confirm + todo.repairsId, todo, {
      headers: { auth: this.JWTHeader },
    });
  }
  getAllToDoOnProcess() {
    return this.httpClient.get(repairsUrls.confirm, {
      headers: { auth: this.JWTHeader },
    });
  }
  getUndoneToDoOnProcess() {
    return this.httpClient.get(repairsUrls.undoneTodo, {
      headers: { auth: this.JWTHeader },
    });
  }
  insertPayment(payment: any) {
    return this.httpClient.post(baseUrl + 'repairs/payment', payment, {
      headers: { auth: this.JWTHeader },
    });
  }
  getPayment(customerId: string, repairId: string) {
    return this.httpClient.get(
      baseUrl + 'repairs/customer/' + customerId + '/' + repairId,
      {
        headers: { auth: this.JWTHeader },
      }
    );
  }
  confirmToDo(customerId: any, repairId: any, toDoId: any) {
    return this.httpClient.post(
      repairsUrls.confirmTodo + toDoId + '/validation',
      {
        customerId,
        repairId,
        toDoId,
      },
      {
        headers: { auth: this.JWTHeader },
      }
    );
  }
  getRepairsUnpaid() {
    return this.httpClient.get(baseUrl + 'repairs/unpaid', {
      headers: { auth: this.JWTHeader },
    });
  }
}
