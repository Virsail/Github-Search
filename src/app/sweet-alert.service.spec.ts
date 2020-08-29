import { TestBed } from '@angular/core/testing';

import { SweetAlertService } from './sweet-alert.service';

describe('SweetAlertService', () => {
  let service: SweetAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetAlertService);
  });

  it('should be created', () => {
    const service: SweetAlertService = TestBed.get(SweetAlertService);
    expect(service).toBeTruthy();
  });
});
