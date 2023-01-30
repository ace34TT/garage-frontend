import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unpaid-repairs',
  templateUrl: './unpaid-repairs.component.html',
  styleUrls: ['./unpaid-repairs.component.scss'],
})
export class UnpaidRepairsComponent {
  public unpaid: any[];
  public loader: boolean = false;

  constructor(private service: CustomerService) {
    this.unpaid = [];
  }
  ngOnInit() {
    this.loader = true;

    this.service.getUnpaidRepairs().subscribe({
      next: (response: any) => {
        this.unpaid = response.repairs;
        console.log(this.unpaid);
        this.loader = false;
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
}
