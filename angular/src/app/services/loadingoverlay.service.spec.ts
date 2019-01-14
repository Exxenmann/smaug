import { TestBed } from '@angular/core/testing';

import { LoadingoverlayService } from './loadingoverlay.service';

describe('LoadingoverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingoverlayService = TestBed.get(LoadingoverlayService);
    expect(service).toBeTruthy();
  });
});
