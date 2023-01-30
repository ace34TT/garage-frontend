import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss'],
})
export class BillDetailsComponent {
  repairId!: string;
  loader: boolean = false;
  selectedRepair: any;
  constructor(
    private service: CustomerService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.loader = true;
    this.repairId = this.activeRoute.snapshot.paramMap.get('repair-id')!;
    this.service.getBillsDetails(this.repairId).subscribe({
      next: (response) => {
        console.log(response);
        this.selectedRepair = response;
        this.loader = false;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
