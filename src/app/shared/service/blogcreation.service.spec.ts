/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogcreationService } from './blogcreation.service';

describe('Service: Blogcreation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogcreationService]
    });
  });

  it('should ...', inject([BlogcreationService], (service: BlogcreationService) => {
    expect(service).toBeTruthy();
  }));
});
