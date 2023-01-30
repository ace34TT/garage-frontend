import { ManagerService } from './../../../services/manager/manager.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss'],
})
export class ManagerLoginComponent {
  @Input() username = 'Australia';
  data: any;
  myUsername!: string;
  myPassword!: string;
  constructor(private service: ManagerService, private router: Router) {}
  ngOnInit() {
    this.myUsername = 'ravaka';
    this.myPassword = 'mdp';
  }
  login(input: any): void {
    localStorage.clear();
    this.service.login(input).subscribe({
      complete: () => {},
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

        if (input.logAs == 'ra') {
          this.router.navigateByUrl('workshop-manager');
        }
        if (input.logAs == 'rf') {
          this.router.navigateByUrl('financial-manager');
        }
      },
    });
  }
}
