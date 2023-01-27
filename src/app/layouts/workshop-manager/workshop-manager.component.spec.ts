import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopManagerComponent } from './workshop-manager.component';

describe('WorkshopManagerComponent', () => {
  let component: WorkshopManagerComponent;
  let fixture: ComponentFixture<WorkshopManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
