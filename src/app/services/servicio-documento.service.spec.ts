import { TestBed } from '@angular/core/testing';

import { ServicioDocumentoService } from './servicio-documento.service';

describe('ServicioDocumentoService', () => {
  let service: ServicioDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
