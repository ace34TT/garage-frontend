import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdvancementComponent } from './details-advancement.component';

describe('DetailsAdvancementComponent', () => {
  let component: DetailsAdvancementComponent;
  let fixture: ComponentFixture<DetailsAdvancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdvancementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAdvancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
