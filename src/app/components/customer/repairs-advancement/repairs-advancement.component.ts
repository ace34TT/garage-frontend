import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repairs-advancement',
  templateUrl: './repairs-advancement.component.html',
  styleUrls: ['./repairs-advancement.component.scss'],
})
export class RepairsAdvancementComponent {
  public unpaid: any[];

  constructor(private service: CustomerService, private router: Router) {
    this.unpaid = [];
  }
  ngOnInit() {
    this.service.getAvancement().subscribe({
      next: (response: any) => {
        for (let i = 0; i < response.length; i++) {
          for (let j = 0; j < response[i].repairs.length; j++) {
            this.unpaid.push({
              customerId: response[i]._id,
              data: response[i].repairs[j],
            });
          }
        }
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
  goToDetails(customerId: string, repairId: string) {
    try {
      this.router.navigateByUrl(
        'customer/advancement-details/' + customerId + '/' + repairId
      );
    } catch (error) {
      console.log(error);
    }
  }
}
