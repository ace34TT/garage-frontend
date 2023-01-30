import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  public allRepairs: any;
  public loader = false;
  constructor(private service: CustomerService) {}
  ngOnInit() {
    this.loader = true;
    return this.service.getAllRepairs().subscribe({
      next: (response) => {
        this.allRepairs = response;
        console.log(this.allRepairs.repairs);
        this.loader = false;
      },
      error: () => {},
      complete: () => [],
    });
  }
}
