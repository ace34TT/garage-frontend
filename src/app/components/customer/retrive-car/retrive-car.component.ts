import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-retrive-car',
  templateUrl: './retrive-car.component.html',
  styleUrls: ['./retrive-car.component.scss'],
})
export class RetriveCarComponent {
  car!: any[];
  custumerId!: any;
  constructor(private service: CustomerService) {}
  ngOnInit() {
    this.service.getRetrievableCar('63d6a14634d6f146f2496d3b').subscribe({
      next: (response: any) => {
        //   this.car = response;
        console.log(response);
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
}
