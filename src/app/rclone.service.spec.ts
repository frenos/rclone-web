import { TestBed } from '@angular/core/testing';

import { RcloneService } from './rclone.service';

describe('RcloneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RcloneService = TestBed.get(RcloneService);
    expect(service).toBeTruthy();
  });
});
