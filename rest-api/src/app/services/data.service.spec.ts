import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    declarations: [
      
    ],
    providers: [],
    schemas: []
  }));

  it('should be created', async() => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
