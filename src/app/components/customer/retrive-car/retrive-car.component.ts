import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrive-car',
  templateUrl: './retrive-car.component.html',
  styleUrls: ['./retrive-car.component.scss'],
})
export class RetriveCarComponent {
  car!: any[];
  public loader: boolean = true;
  constructor(private service: CustomerService, private router: Router) {}
  ngOnInit() {
    this.service.getRetrievableCar(localStorage.getItem('user_id')).subscribe({
      next: (response: any) => {
        this.car = response.data;
        this.loader = false;
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
        next: (response: any) => {
          this.router.navigateByUrl('/customer/retrieve-car');
        },
        complete: () => {},
        error: (error) => {
          console.log(error);
        },
      });
  }
}
