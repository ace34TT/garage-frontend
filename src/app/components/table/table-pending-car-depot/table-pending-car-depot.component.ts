import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-pending-car-depot',
  templateUrl: './table-pending-car-depot.component.html',
  styleUrls: ['./table-pending-car-depot.component.scss'],
})
export class TablePendingCarDepotComponent {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor() {}
  ngOnInit(): void {}
}
