import { TestBed } from '@angular/core/testing';

import { SharedCategoryServiceService } from './shared-category-service.service';

describe('SharedCategoryServiceService', () => {
  let service: SharedCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
