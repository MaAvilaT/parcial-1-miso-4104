import { TestBed } from '@angular/core/testing';

import { PlantsService } from './plants.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('PlantsService', () => {
  let service: PlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PlantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
