import { TestBed } from '@angular/core/testing';

import { ClientIService } from './client-i.service';

describe('ClientIService', () => {
  let service: ClientIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
