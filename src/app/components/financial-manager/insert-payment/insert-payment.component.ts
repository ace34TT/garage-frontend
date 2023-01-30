import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';

@Component({
  selector: 'app-insert-payment',
  templateUrl: './insert-payment.component.html',
  styleUrls: ['./insert-payment.component.scss'],
})
export class InsertPaymentComponent {
  customerId!: any;
  repairId!: any;
  myFirstname!: any;
  myLastname!: any;
  myRegistration_number!: any;
  myCustomer_id!: any;
  myRepairId!: any;

  public pendingItems: Array<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: WorkshopManagerService,
    private router: Router
  ) {
    this.pendingItems = [];
  }
  ngOnInit() {
    this.myCustomer_id =
      this.activatedRoute.snapshot.paramMap.get('customerId');
    this.myRepairId = this.activatedRoute.snapshot.paramMap.get('repairId');
    this.myFirstname = this.activatedRoute.snapshot.paramMap.get('firstName');
    this.myLastname = this.activatedRoute.snapshot.paramMap.get('lastName');
    this.myRegistration_number = this.activatedRoute.snapshot.paramMap.get(
      'registration_number'
    );

    this.activatedRoute.paramMap.subscribe((data) => {
      this.customerId = data.get('customerId');
      this.repairId = data.get('repairId');
    });
    this.getTab();
    console.log(this.pendingItems);
  }
  getTab() {
    this.service.getPayment(this.myCustomer_id, this.repairId).subscribe({
      complete: () => {},
      error: (error: { status: any }) => {
        console.log('error', error.status);
      },
      next: (response: any) => {
        console.log(this.pendingItems);
        console.log('-=-==========================');
        //console.log(response.repairs[0].payment);
        this.pendingItems = response.repairs[0].payment;
        console.log(this.pendingItems);
      },
    });
  }
  submitInsert(data: any) {
    let insert = {
      customerId: this.myCustomer_id,
      repairId: this.repairId,
      payment: {
        amount: data.price,
      },
    };
    this.service.insertPayment(insert).subscribe({
      complete: () => {},
      error: (error: { status: any }) => {
        console.log('error', error.status);
      },
      next: (response: any) => {
        this.router.navigateByUrl('/financial-manager/repairs-unpaid');
      },
    });
  }
}
