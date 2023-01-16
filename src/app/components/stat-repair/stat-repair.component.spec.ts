import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatRepairComponent } from './stat-repair.component';

describe('StatRepairComponent', () => {
  let component: StatRepairComponent;
  let fixture: ComponentFixture<StatRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
