import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePendingCarDepotComponent } from './table-pending-car-depot.component';

describe('TablePendingCarDepotComponent', () => {
  let component: TablePendingCarDepotComponent;
  let fixture: ComponentFixture<TablePendingCarDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePendingCarDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePendingCarDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
