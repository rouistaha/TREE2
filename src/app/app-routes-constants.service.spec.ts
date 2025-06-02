import { TestBed } from '@angular/core/testing';

import { AppRoutesConstantsService } from './app-routes-constants.service';

describe('AppRoutesConstantsService', () => {
  let service: AppRoutesConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRoutesConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
