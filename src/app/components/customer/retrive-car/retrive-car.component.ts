import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-retrive-car',
  templateUrl: './retrive-car.component.html',
  styleUrls: ['./retrive-car.component.scss'],
})
export class RetriveCarComponent {
  car!: any[];
  constructor(private service: CustomerService) {}
  ngOnInit() {
    this.service.getRetrievableCar(localStorage.getItem('user_id')).subscribe({
      next: (response: any) => {
        this.car = response.data;
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
  recover(repairId: any) {
    console.log('recovered');
    this.service
      .recoverCar(localStorage.getItem('user_id'), repairId)
      .subscribe({
        next: (response: any) => {},
        complete: () => {},
        error: (error) => {
          console.log(error);
        },
      });
  }
}
