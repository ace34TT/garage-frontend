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
  myFirstname!: string;
  myLastname!: string;
  myRegistration_number!: string;

  public pendingItems: Array<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: WorkshopManagerService,
    private router: Router
  ) {
    this.pendingItems = [];
  }
  ngOnInit() {
    this.myFirstname = 'default firstname';
    this.myLastname = 'default lastname';
    this.myRegistration_number = 'default registration number';
    this.activatedRoute.paramMap.subscribe((data) => {
      this.customerId = data.get('customerId');
      this.repairId = data.get('repairId');
    });
  }
  pushItem(data: any) {
    this.pendingItems.push({
      price: data.price,
      firstname: data.firstname,
      lastname: data.lastname,
      registration_number: data.registration_number,
    });
  }

  submitConfirmation() {
    let insert = {
      customerId: this.customerId,
      repairId: this.repairId,
      toDo: this.pendingItems,
    };
    this.service.confirmRepair(insert).subscribe({
      complete: () => {},
      error: (error: { status: any }) => {
        console.log('error', error.status);
      },
      next: (response: any) => {
        this.router.navigateByUrl('/workshop-manager/unconfirmed-repairs');
      },
    });
  }
}
