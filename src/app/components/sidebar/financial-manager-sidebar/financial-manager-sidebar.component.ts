import { Component } from '@angular/core';

@Component({
  selector: 'app-financial-manager-sidebar',
  templateUrl: './financial-manager-sidebar.component.html',
  styleUrls: ['./financial-manager-sidebar.component.scss'],
})
export class FinancialManagerSidebarComponent {
  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
