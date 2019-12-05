import { TestBed } from '@angular/core/testing';

import { PrzedmiotyDatyService } from './przedmioty-daty.service';

describe('PrzedmiotyDatyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrzedmiotyDatyService = TestBed.get(PrzedmiotyDatyService);
    expect(service).toBeTruthy();
  });
});
