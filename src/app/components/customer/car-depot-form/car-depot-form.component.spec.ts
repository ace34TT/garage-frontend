import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDepotFormComponent } from './car-depot-form.component';

describe('CarDepotFormComponent', () => {
  let component: CarDepotFormComponent;
  let fixture: ComponentFixture<CarDepotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDepotFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDepotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
