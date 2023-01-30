import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, repairsUrls } from './../url';

@Injectable({
  providedIn: 'root',
})
export class WorkshopManagerService {
  finalBaseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.finalBaseUrl = baseUrl + 'workshop-manager';
  }
  getUnconfirmedRepairs() {
    return this.httpClient.get(repairsUrls.unconfirmed);
  }
  confirmRepair(todo: any) {
    return this.httpClient.post(repairsUrls.confirm + todo.repairsId, todo);
  }
  getAllToDoOnProcess() {
    return this.httpClient.get(repairsUrls.confirm);
  }
  getUndoneToDoOnProcess() {
    return this.httpClient.get(repairsUrls.undoneTodo);
  }
  insertPayment(payment: any) {
    return this.httpClient.post(baseUrl + 'repairs/payment', payment);
  }
  getPayment(customerId: string, repairId: string) {
    return this.httpClient.get(
      baseUrl + 'repairs/customer/' + customerId + '/' + repairId
    );
  }
  confirmToDo(customerId: any, repairId: any, toDoId: any) {
    return this.httpClient.post(
      repairsUrls.confirmTodo + toDoId + '/validation',
      {
        customerId,
        repairId,
        toDoId,
      }
    );
  }
  getRepairsUnpaid() {
    return this.httpClient.get(baseUrl + 'repairs/unpaid');
  }
}
