import { TestBed, inject } from '@angular/core/testing';

import { Angular2SwapiService } from './angular2-swapi.service';

describe('Angular2SwapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Angular2SwapiService]
    });
  });

  it('should be created', inject([Angular2SwapiService], (service: Angular2SwapiService) => {
    expect(service).toBeTruthy();
  }));
});
