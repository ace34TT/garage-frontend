import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-details-advancement',
  templateUrl: './details-advancement.component.html',
  styleUrls: ['./details-advancement.component.scss'],
})
export class DetailsAdvancementComponent {
  myCustomerId!: any;
  myRepairId!: any;
  myData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CustomerService
  ) {}
  ngOnInit() {
    this.myCustomerId = this.activatedRoute.snapshot.paramMap.get('customerId');
    this.myRepairId = this.activatedRoute.snapshot.paramMap.get('repairId');
    this.service
      .getDetailsAvancement(this.myCustomerId, this.myRepairId)
      .subscribe({
        next: (response: any) => {
          this.myData = response;
        },
        complete: () => {},
        error: (error) => {
          console.log(error);
        },
      });
  }
}
