import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutCreateComponent } from './prodcut-create.component';

describe('ProdcutCreateComponent', () => {
  let component: ProdcutCreateComponent;
  let fixture: ComponentFixture<ProdcutCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdcutCreateComponent]
    });
    fixture = TestBed.createComponent(ProdcutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
