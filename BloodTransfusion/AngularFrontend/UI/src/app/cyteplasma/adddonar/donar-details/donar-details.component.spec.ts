import { ComponentFixture, TestBed } from '@angular/core/testing';

import { donarDetailsComponent } from './donar-details.component';

describe('donarDetailsComponent', () => {
  let component: donarDetailsComponent;
  let fixture: ComponentFixture<donarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [donarDetailsComponent]
    });
    fixture = TestBed.createComponent(donarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
