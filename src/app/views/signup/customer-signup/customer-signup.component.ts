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
    // console.log(data);
    try {
      this.service.signup(data).subscribe({
        complete: () => {},
        error: (error) => {
          console.log('error', error.status);
        },
        next: (response) => {
          // this.router.navigateByUrl('/customer');
        },
      });
    } catch (error) {
      console.log(error);
    }

    // this.router.navigateByUrl('/login');
  }
}
