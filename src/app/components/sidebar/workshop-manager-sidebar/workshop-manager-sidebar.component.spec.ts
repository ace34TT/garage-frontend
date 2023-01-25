import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopManagerSidebarComponent } from './workshop-manager-sidebar.component';

describe('WorkshopManagerSidebarComponent', () => {
  let component: WorkshopManagerSidebarComponent;
  let fixture: ComponentFixture<WorkshopManagerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkshopManagerSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkshopManagerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
