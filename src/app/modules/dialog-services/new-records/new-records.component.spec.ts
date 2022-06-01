import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecordsComponent } from './new-records.component';

describe('NewRecordsComponent', () => {
  let component: NewRecordsComponent;
  let fixture: ComponentFixture<NewRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
