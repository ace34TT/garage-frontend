import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConfirmedCarDepotComponent } from './table-confirmed-car-depot.component';

describe('TableConfirmedCarDepotComponent', () => {
  let component: TableConfirmedCarDepotComponent;
  let fixture: ComponentFixture<TableConfirmedCarDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConfirmedCarDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableConfirmedCarDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
