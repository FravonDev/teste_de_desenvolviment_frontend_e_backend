import { TestBed } from '@angular/core/testing';

import { CittamobiService } from './cittamobi.service';

describe('CittamobiService', () => {
  let service: CittamobiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CittamobiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
