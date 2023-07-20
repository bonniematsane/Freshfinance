import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdviceComponent } from './business-advice.component';

describe('BusinessAdviceComponent', () => {
  let component: BusinessAdviceComponent;
  let fixture: ComponentFixture<BusinessAdviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessAdviceComponent]
    });
    fixture = TestBed.createComponent(BusinessAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
