import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private workshopManagerService: WorkshopManagerService
  ) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.customerId = data.get('customerId');
      this.repairId = data.get('repairId');
    });
  }
  insertCarData(data: any, myCustomerId: any, myRepairId: any) {
    console.log('vao miditra');
    console.log(data);
    let insert = {
      customerId: myCustomerId,
      repairId: myRepairId,
      toDo: [
        {
          label: data.label,
          price: data.price,
          started_at: data.started_at,
          done_at: data.done_at,
        },
      ],
    };
    console.log('anelanelany');
    console.log(insert);
    this.workshopManagerService.insertTodo(insert);
  }
}
