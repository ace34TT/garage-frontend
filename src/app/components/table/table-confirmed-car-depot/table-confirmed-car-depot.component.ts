import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-confirmed-car-depot',
  templateUrl: './table-confirmed-car-depot.component.html',
  styleUrls: ['./table-confirmed-car-depot.component.scss'],
})
export class TableConfirmedCarDepotComponent {
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
