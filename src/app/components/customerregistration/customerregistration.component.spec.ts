import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerregistrationComponent } from './customerregistration.component';

describe('CustomerregistrationComponent', () => {
  let component: CustomerregistrationComponent;
  let fixture: ComponentFixture<CustomerregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerregistrationComponent]
    });
    fixture = TestBed.createComponent(CustomerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
