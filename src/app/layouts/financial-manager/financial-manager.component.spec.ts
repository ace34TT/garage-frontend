import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialManagerComponent } from './financial-manager.component';

describe('FinancialManagerComponent', () => {
  let component: FinancialManagerComponent;
  let fixture: ComponentFixture<FinancialManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
