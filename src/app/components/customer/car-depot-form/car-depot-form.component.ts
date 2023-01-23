import { ICarData } from './../../../interface/customer.schema';
import { CustomerService } from './../../../services/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-depot-form',
  templateUrl: './car-depot-form.component.html',
  styleUrls: ['./car-depot-form.component.scss'],
})
export class CarDepotFormComponent {
  private data: any;
  constructor(private service: CustomerService) {}
  depositCar(carData: ICarData) {
    alert('insert');
    this.service.depositCar(carData);
  }
}
