import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualRecordsComponent } from './annual-records.component';

describe('AnnualRecordsComponent', () => {
  let component: AnnualRecordsComponent;
  let fixture: ComponentFixture<AnnualRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
