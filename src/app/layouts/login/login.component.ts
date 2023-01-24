import { CustomerService } from '../../services/customer.service';
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
    this.service.loginCustomer(input).subscribe({
      complete: () => {}, // completeHandler
      error: (error) => {
        console.log('error', error.status);
      },
      next: (response) => {
        this.data = response;
        localStorage.setItem('user_id', this.data.data.user._id);
        localStorage.setItem('token', this.data.data.token);
        localStorage.setItem(
          'fullname',
          this.data.data.user.firstname + ' ' + this.data.data.user.lastname
        );
        this.router.navigateByUrl('/customer');
      },
    });
  }
}