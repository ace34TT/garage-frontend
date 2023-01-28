import { Component } from '@angular/core';

@Component({
  selector: 'app-unpaid-payment',
  templateUrl: './unpaid-payment.component.html',
  styleUrls: ['./unpaid-payment.component.scss'],
})
export class UnpaidPaymentComponent {
  payments!: any;
  ngOnInit() {
    this.payments = [
      {
        id: 1,
        number_plate: '001 tab',
        total_amount: 1000,
        total_paid: 2000,
        last_name: 'mihaja',
      },
      {
        id: 2,
        number_plate: '002 tab',
        total_amount: 1000,
        total_paid: 2000,
        last_name: 'mirado',
      },
      {
        id: 3,
        number_plate: '003 tab',
        total_amount: 1000,
        total_paid: 2000,
        last_name: 'mitia',
      },
    ];
  }
}
