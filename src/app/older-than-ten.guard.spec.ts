import { TestBed, async, inject } from '@angular/core/testing';

import { OlderThanTenGuard } from './older-than-ten.guard';

describe('OlderThanTenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OlderThanTenGuard]
    });
  });

  it('should ...', inject([OlderThanTenGuard], (guard: OlderThanTenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
