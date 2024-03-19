import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDetailsComponent } from './health-details.component';

describe('HealthDetailsComponent', () => {
  let component: HealthDetailsComponent;
  let fixture: ComponentFixture<HealthDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthDetailsComponent]
    });
    fixture = TestBed.createComponent(HealthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
