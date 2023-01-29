import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UndoneTodoModalComponent } from '../../ng-material/modal/undone-todo-modal/undone-todo-modal.component';

@Component({
  selector: 'app-repairs-on-process',
  templateUrl: './repairs-on-process.component.html',
  styleUrls: ['./repairs-on-process.component.scss'],
})
export class RepairsOnProcessComponent {
  public undone: any[];
  constructor(
    private service: WorkshopManagerService,
    public dialog: MatDialog
  ) {
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
  openDialog() {
    const dialogRef = this.dialog.open(UndoneTodoModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
