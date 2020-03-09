import { TestBed } from '@angular/core/testing';

import { ServicioAutenticacion } from './servicioAutent.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioAutenticacion = TestBed.get(ServicioAutenticacion);
    expect(service).toBeTruthy();
  });
});
