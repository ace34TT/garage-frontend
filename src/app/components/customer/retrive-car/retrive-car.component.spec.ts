import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetriveCarComponent } from './retrive-car.component';

describe('RetriveCarComponent', () => {
  let component: RetriveCarComponent;
  let fixture: ComponentFixture<RetriveCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetriveCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetriveCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
