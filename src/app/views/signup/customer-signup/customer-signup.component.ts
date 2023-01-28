import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { baseUrl } from 'src/app/services/url';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss'],
})
export class CustomerSignupComponent {
  constructor(
    private service: CustomerService,
    private router: Router,
    private httpClient: HttpClient
  ) {}
  ngOnInit() {}
  signUp(data: any): void {
    try {
      this.httpClient
        .post(baseUrl + 'customers', {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          credentials: {
            password: data.password,
            roles: ['ctmr'],
          },
        })
        .subscribe((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }

    // this.router.navigateByUrl('/login');
  }
}
