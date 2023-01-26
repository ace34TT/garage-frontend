import { Component, OnInit } from '@angular/core';
import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';

@Component({
  selector: 'app-repairs-unconfirmed',
  templateUrl: './repairs-unconfirmed.component.html',
  styleUrls: ['./repairs-unconfirmed.component.scss'],
})
export class RepairsUnconfirmedComponent {
  repairs!: any;

  constructor(private workshopManagerService: WorkshopManagerService) {}

  ngOnInit() {
    this.workshopManagerService.repairsUnconfirmed().subscribe((res) => {
      this.repairs = res;
    });
  }
}
