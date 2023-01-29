import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-repairs-on-process',
  templateUrl: './repairs-on-process.component.html',
  styleUrls: ['./repairs-on-process.component.scss'],
})
export class RepairsOnProcessComponent {
  public undone: any[];
  constructor(private service: WorkshopManagerService) {
    this.undone = [];
  }
  ngOnInit() {
    this.service.getUndoneToDoOnProcess().subscribe({
      complete: () => {},
      error: (error) => {
        console.log('error', error.status);
      },
      next: (response) => {
        this.undone = Object.values(response);
      },
    });
  }
}
