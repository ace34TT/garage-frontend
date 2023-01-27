import { TestBed } from '@angular/core/testing';

import { WorkshopManagerService } from './workshop-manager.service';

describe('WorkshopManagerService', () => {
  let service: WorkshopManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
