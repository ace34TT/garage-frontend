import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';

@Component({
  selector: 'app-unconfirmed-repairs',
  templateUrl: './unconfirmed-repairs.component.html',
  styleUrls: ['./unconfirmed-repairs.component.scss'],
})
export class UnconfirmedRepairsComponent {
  repairs!: any;
  constructor(
    private workshopManagerService: WorkshopManagerService,
    private router: Router
  ) {}
  ngOnInit() {
    this.workshopManagerService.getUnconfirmedRepairs().subscribe({
      complete: () => {},
      error: (error) => {
        console.log('error', error.status);
      },
      next: (response) => {
        this.repairs = response;
      },
    });
  }

  repairsOnClick(customerId: string, repairId: string) {
    this.router.navigateByUrl(
      '/workshop-manager/repair/confirmation-form/' +
        customerId +
        '/' +
        repairId
    );
  }
}
