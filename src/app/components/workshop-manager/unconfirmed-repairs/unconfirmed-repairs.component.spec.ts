import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedRepairsComponent } from './unconfirmed-repairs.component';

describe('UnconfirmedRepairsComponent', () => {
  let component: UnconfirmedRepairsComponent;
  let fixture: ComponentFixture<UnconfirmedRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnconfirmedRepairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnconfirmedRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
