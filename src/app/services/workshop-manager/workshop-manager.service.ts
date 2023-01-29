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
}
