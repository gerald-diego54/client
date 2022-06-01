import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuallyContributionsComponent } from './annually-contributions.component';

describe('AnnuallyContributionsComponent', () => {
  let component: AnnuallyContributionsComponent;
  let fixture: ComponentFixture<AnnuallyContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuallyContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuallyContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
