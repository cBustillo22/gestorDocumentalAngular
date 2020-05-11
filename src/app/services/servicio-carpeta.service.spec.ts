import { TestBed } from '@angular/core/testing';

import { ServicioCarpetaService } from './servicio-carpeta.service';

describe('ServicioCarpetaService', () => {
  let service: ServicioCarpetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCarpetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
