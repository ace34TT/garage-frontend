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
  ngOnInit() {}

  login(input: any): void {
    console.log(input);
    this.service.loginCustomer(input).subscribe(
      (response) => {
        this.data = response;
        console.log('very enao');
        if (this.data.message) {
          this.router.navigateByUrl('/listRepair');
        }
      },
      (error) => {
        this.router.navigateByUrl('/login');
      }
    );
  }
  goListRepair(): void {
    this.router.navigateByUrl('/listRepair');
  }
  goStatRepair(): void {
    this.router.navigateByUrl('/statRepair');
  }
}
