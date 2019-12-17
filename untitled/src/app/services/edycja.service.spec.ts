import { TestBed } from '@angular/core/testing';

import { EdycjaService } from './edycja.service';

describe('EdycjaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdycjaService = TestBed.get(EdycjaService);
    expect(service).toBeTruthy();
  });
});
