import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsOnProcessComponent } from './repairs-on-process.component';

describe('RepairsOnProcessComponent', () => {
  let component: RepairsOnProcessComponent;
  let fixture: ComponentFixture<RepairsOnProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsOnProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsOnProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
