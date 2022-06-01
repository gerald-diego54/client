import { TestBed } from '@angular/core/testing';

import { NewRecordsService } from './new-records.service';

describe('NewRecordsService', () => {
  let service: NewRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
