import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCarpetaComponent } from './agregar-carpeta.component';

describe('AgregarCarpetaComponent', () => {
  let component: AgregarCarpetaComponent;
  let fixture: ComponentFixture<AgregarCarpetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCarpetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
