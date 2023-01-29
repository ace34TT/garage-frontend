import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';
@Component({
  selector: 'app-insert-to-do',
  templateUrl: './insert-to-do.component.html',
  styleUrls: ['./insert-to-do.component.scss'],
})
export class InsertToDoComponent {
  customerId!: any;
  repairId!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: WorkshopManagerService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.customerId = data.get('customerId');
      this.repairId = data.get('repairId');
    });
  }
  insertCarData(data: any, myCustomerId: any, myRepairId: any) {
    let insert = {
      customerId: myCustomerId,
      repairId: myRepairId,
      toDo: [
        {
          status: false,
          label: data.label,
          price: data.price,
          started_at: data.started_at,
          done_at: data.done_at,
        },
      ],
    };
    this.service.confirmRepair(insert).subscribe({
      complete: () => {},
      error: (error: { status: any }) => {
        console.log('error', error.status);
      },
      next: (response: any) => {
        this.router.navigateByUrl('/workshop-manager/unconfirmed-repairs');
      },
    });
  }
}
