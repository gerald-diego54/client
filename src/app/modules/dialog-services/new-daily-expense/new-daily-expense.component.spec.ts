import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDailyExpenseComponent } from './new-daily-expense.component';

describe('NewDailyExpenseComponent', () => {
  let component: NewDailyExpenseComponent;
  let fixture: ComponentFixture<NewDailyExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDailyExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDailyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
