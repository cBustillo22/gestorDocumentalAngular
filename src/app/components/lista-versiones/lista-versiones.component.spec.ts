import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVersionesComponent } from './lista-versiones.component';

describe('ListaVersionesComponent', () => {
  let component: ListaVersionesComponent;
  let fixture: ComponentFixture<ListaVersionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVersionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
