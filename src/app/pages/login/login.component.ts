import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  data: any;
  constructor(private service: CustomerService, private router: Router) {}
  ngOnInit() {
    this.service.getAllCustomer().subscribe((response) => {
      console.log('je suis dans login');
      console.log(response);
      this.data = response;
    });
  }
  goListRepair(): void {
    console.log('goStatRep mihaja');
    this.router.navigateByUrl('/listRepair');
  }
  goStatRepair(): void {
    console.log('goStatRep mihaja');
    this.router.navigateByUrl('/statRepair');
  }
}
