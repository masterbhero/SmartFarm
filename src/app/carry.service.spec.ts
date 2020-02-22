import { TestBed } from '@angular/core/testing';

import { CarryService } from './carry.service';

describe('CarryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarryService = TestBed.get(CarryService);
    expect(service).toBeTruthy();
  });
});
