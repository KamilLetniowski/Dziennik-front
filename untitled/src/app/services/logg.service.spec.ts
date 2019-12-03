import { TestBed } from '@angular/core/testing';

import { LoggService } from './logg.service';

describe('LoggService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggService = TestBed.get(LoggService);
    expect(service).toBeTruthy();
  });
});
