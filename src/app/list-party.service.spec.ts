import { TestBed } from '@angular/core/testing';

import { ListPartyService } from './list-party.service';

describe('ListPartyService', () => {
  let service: ListPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
