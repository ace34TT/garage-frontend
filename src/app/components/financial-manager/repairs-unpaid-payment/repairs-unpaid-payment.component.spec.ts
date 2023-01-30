import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsUnpaidPaymentComponent } from './repairs-unpaid-payment.component';

describe('RepairsUnpaidPaymentComponent', () => {
  let component: RepairsUnpaidPaymentComponent;
  let fixture: ComponentFixture<RepairsUnpaidPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsUnpaidPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsUnpaidPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
