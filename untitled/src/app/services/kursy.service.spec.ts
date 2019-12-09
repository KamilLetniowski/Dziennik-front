import { TestBed } from '@angular/core/testing';

import { KursyService } from './kursy.service';

describe('KursyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KursyService = TestBed.get(KursyService);
    expect(service).toBeTruthy();
  });
});
