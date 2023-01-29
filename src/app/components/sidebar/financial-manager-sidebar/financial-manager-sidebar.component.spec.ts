import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialManagerSidebarComponent } from './financial-manager-sidebar.component';

describe('FinancialManagerSidebarComponent', () => {
  let component: FinancialManagerSidebarComponent;
  let fixture: ComponentFixture<FinancialManagerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialManagerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialManagerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
