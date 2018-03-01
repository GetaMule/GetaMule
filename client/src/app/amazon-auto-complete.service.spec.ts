import { TestBed, inject } from '@angular/core/testing';

import { AmazonAutoCompleteService } from './amazon-auto-complete.service';

describe('AmazonAutoCompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmazonAutoCompleteService]
    });
  });

  it('should be created', inject([AmazonAutoCompleteService], (service: AmazonAutoCompleteService) => {
    expect(service).toBeTruthy();
  }));
});
