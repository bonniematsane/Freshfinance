import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastButtonsComponent } from './last-buttons.component';

describe('LastButtonsComponent', () => {
  let component: LastButtonsComponent;
  let fixture: ComponentFixture<LastButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastButtonsComponent]
    });
    fixture = TestBed.createComponent(LastButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
