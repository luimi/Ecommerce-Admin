import { TestBed } from '@angular/core/testing';

import { Lui2miEcommerceAdminService } from './lui2mi-ecommerce-admin.service';

describe('Lui2miEcommerceAdminService', () => {
  let service: Lui2miEcommerceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lui2miEcommerceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
