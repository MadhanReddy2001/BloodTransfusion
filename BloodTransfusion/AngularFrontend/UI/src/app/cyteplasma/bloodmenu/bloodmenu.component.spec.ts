import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodmenuComponent } from './bloodmenu.component';

describe('BloodmenuComponent', () => {
  let component: BloodmenuComponent;
  let fixture: ComponentFixture<BloodmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodmenuComponent]
    });
    fixture = TestBed.createComponent(BloodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
