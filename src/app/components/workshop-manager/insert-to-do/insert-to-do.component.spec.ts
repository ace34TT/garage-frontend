import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertToDoComponent } from './insert-to-do.component';

describe('InsertToDoComponent', () => {
  let component: InsertToDoComponent;
  let fixture: ComponentFixture<InsertToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
