import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsAdvancementComponent } from './repairs-advancement.component';

describe('RepairsAdvancementComponent', () => {
  let component: RepairsAdvancementComponent;
  let fixture: ComponentFixture<RepairsAdvancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsAdvancementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsAdvancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
