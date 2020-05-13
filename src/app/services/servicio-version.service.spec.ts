import { TestBed } from '@angular/core/testing';

import { ServicioVersionService } from './servicio-version.service';

describe('ServicioVersionService', () => {
  let service: ServicioVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
