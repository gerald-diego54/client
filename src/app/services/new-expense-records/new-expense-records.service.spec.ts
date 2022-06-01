import { TestBed } from '@angular/core/testing';

import { NewExpenseRecordsService } from './new-expense-records.service';

describe('NewExpenseRecordsService', () => {
  let service: NewExpenseRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewExpenseRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
