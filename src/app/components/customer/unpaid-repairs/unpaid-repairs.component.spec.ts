import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidRepairsComponent } from './unpaid-repairs.component';

describe('UnpaidRepairsComponent', () => {
  let component: UnpaidRepairsComponent;
  let fixture: ComponentFixture<UnpaidRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidRepairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnpaidRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
