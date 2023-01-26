import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsUnconfirmedComponent } from './repairs-unconfirmed.component';

describe('RepairsUnconfirmedComponent', () => {
  let component: RepairsUnconfirmedComponent;
  let fixture: ComponentFixture<RepairsUnconfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsUnconfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsUnconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
