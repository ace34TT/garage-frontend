import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-depot-form',
  templateUrl: './car-depot-form.component.html',
  styleUrls: ['./car-depot-form.component.scss'],
})
export class CarDepotFormComponent {
  loader: boolean = false;
  public carFormData: {
    registration_number: string;
    brand: string;
    model: string;
  } = { registration_number: 'RTX4080', brand: 'BMW', model: 'XZF' };
  constructor(private service: CustomerService) {}
  depositCar(carData: any) {
    this.loader = true;
    const data = {
      _id: localStorage.getItem('user_id'),
      repairs: {
        is_confirmed: false,
        total_amount: 0,
        car: {
          registration_number: carData.registration_number,
          brand: carData.brand,
          model: carData.model,
        },
        to_do: [],
      },
    };
    this.service.depositCar(data).subscribe({
      next: (data) => {
        this.loader = false;
      },
      error: (error) => {
        console.log(error);
        this.loader = false;
      },
      complete: () => {
        this.loader = false;
      },
    });
  }
}
