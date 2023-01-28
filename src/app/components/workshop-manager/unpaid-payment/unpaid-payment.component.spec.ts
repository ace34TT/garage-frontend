import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidPaymentComponent } from './unpaid-payment.component';

describe('UnpaidPaymentComponent', () => {
  let component: UnpaidPaymentComponent;
  let fixture: ComponentFixture<UnpaidPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnpaidPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
