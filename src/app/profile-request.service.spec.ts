import { TestBed } from '@angular/core/testing';

import { ProfileRequestService } from './profile-request.service';

describe('ProfileRequestService', () => {
  let service: ProfileRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileRequestService);
  });

  it('should be created', () => {
    const service: ProfileRequestService = TestBed.get(ProfileRequestService);
    expect(service).toBeTruthy();
  });
});
