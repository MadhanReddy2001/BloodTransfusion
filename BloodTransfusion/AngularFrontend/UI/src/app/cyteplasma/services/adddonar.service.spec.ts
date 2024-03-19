import { TestBed } from '@angular/core/testing';

import { AdddonarService } from './adddonar.service';

describe('AdddonarService', () => {
  let service: AdddonarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdddonarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
