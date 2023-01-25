import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarNotConfirmedComponent } from './car-not-confirmed.component';

describe('CarNotConfirmedComponent', () => {
  let component: CarNotConfirmedComponent;
  let fixture: ComponentFixture<CarNotConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarNotConfirmedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarNotConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
