import { TestBed } from '@angular/core/testing';

import { UserconfigService } from './userconfig.service';

describe('UserconfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserconfigService = TestBed.get(UserconfigService);
    expect(service).toBeTruthy();
  });
});
