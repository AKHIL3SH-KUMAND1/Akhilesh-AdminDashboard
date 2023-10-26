import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatherIconTestComponent } from './feather-icon-test.component';

describe('FeatherIconTestComponent', () => {
  let component: FeatherIconTestComponent;
  let fixture: ComponentFixture<FeatherIconTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatherIconTestComponent]
    });
    fixture = TestBed.createComponent(FeatherIconTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
