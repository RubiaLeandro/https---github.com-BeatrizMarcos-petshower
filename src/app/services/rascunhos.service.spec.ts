import { TestBed } from '@angular/core/testing';

import { RascunhosService } from './rascunhos.service';

describe('RascunhosService', () => {
  let service: RascunhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RascunhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
