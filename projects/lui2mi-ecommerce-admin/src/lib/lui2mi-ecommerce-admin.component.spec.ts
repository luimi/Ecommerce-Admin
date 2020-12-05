import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lui2miEcommerceAdminComponent } from './lui2mi-ecommerce-admin.component';

describe('Lui2miEcommerceAdminComponent', () => {
  let component: Lui2miEcommerceAdminComponent;
  let fixture: ComponentFixture<Lui2miEcommerceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lui2miEcommerceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lui2miEcommerceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
