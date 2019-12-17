import { TestBed } from '@angular/core/testing';

import { ObecnosciService } from './obecnosci.service';

describe('ObecnosciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObecnosciService = TestBed.get(ObecnosciService);
    expect(service).toBeTruthy();
  });
});
