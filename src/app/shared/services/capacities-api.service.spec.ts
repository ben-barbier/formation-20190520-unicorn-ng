import { TestBed } from '@angular/core/testing';

import { CapacitiesApiService } from './capacities-api.service';

describe('CapacitiesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacitiesApiService = TestBed.get(CapacitiesApiService);
    expect(service).toBeTruthy();
  });
});
