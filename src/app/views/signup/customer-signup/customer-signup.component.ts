import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss'],
})
export class CustomerSignupComponent {
  constructor(private router: Router) {}
  signUp(data: any): void {
    console.log('signUp');
    console.log(data);
    // this.router.navigateByUrl('/login');
  }
}
