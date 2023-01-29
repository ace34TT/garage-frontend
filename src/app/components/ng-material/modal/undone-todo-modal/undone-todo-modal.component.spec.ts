import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoneTodoModalComponent } from './undone-todo-modal.component';

describe('UndoneTodoModalComponent', () => {
  let component: UndoneTodoModalComponent;
  let fixture: ComponentFixture<UndoneTodoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndoneTodoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndoneTodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
