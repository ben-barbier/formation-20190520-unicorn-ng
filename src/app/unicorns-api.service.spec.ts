import { TestBed } from '@angular/core/testing';

import { UnicornsApiService } from './unicorns-api.service';

describe('UnicornsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnicornsApiService = TestBed.get(UnicornsApiService);
    expect(service).toBeTruthy();
  });
});
