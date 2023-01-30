import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';

@Component({
  selector: 'app-repairs-unpaid-payment',
  templateUrl: './repairs-unpaid-payment.component.html',
  styleUrls: ['./repairs-unpaid-payment.component.scss'],
})
export class RepairsUnpaidPaymentComponent {
  repairs!: any;
  constructor(
    private workshopManagerService: WorkshopManagerService,
    private router: Router
  ) {}
  ngOnInit() {
    this.workshopManagerService.getRepairsUnpaid().subscribe({
      complete: () => {},
      error: (error) => {
        console.log('error', error.status);
      },
      next: (response) => {
        this.repairs = response;
      },
    });
  }

  repairsOnClick(
    customerId: string,
    repairId: string,
    firstName: string,
    lastName: string,
    registration_number: string
  ) {
    this.router.navigateByUrl(
      '/financial-manager/insert-payment/' +
        customerId +
        '/' +
        repairId +
        '/' +
        firstName +
        '/' +
        lastName +
        '/' +
        registration_number
    );
  }
}
