import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop-manager-sidebar',
  templateUrl: './workshop-manager-sidebar.component.html',
  styleUrls: ['./workshop-manager-sidebar.component.scss'],
})
export class WorkshopManagerSidebarComponent {
  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
