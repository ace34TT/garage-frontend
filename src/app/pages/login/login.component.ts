import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  data: any;
  constructor(private service: CustomerService) {}
  ngOnInit() {
    this.service.getAllCustomer().subscribe((response) => {
      console.log(response);
      this.data = response;
    });
  }
}
