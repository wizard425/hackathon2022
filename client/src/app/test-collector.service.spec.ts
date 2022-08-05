import { TestBed } from '@angular/core/testing';

import { TestCollectorService } from './test-collector.service';

describe('TestCollectorService', () => {
  let service: TestCollectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCollectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
