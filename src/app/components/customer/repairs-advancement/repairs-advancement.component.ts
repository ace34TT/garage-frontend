import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-repairs-advancement',
  templateUrl: './repairs-advancement.component.html',
  styleUrls: ['./repairs-advancement.component.scss'],
})
export class RepairsAdvancementComponent {
  public unpaid: any[];

  constructor(private service: CustomerService) {
    this.unpaid = [];
  }
  ngOnInit() {
    this.service.getAvancement().subscribe({
      next: (response: any) => {
        console.log(response[0].repairs);
        this.unpaid = response[0].repairs;
        // console.log(this.unpaid);
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
}
