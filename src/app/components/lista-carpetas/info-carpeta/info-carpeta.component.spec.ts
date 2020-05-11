import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCarpetaComponent } from './info-carpeta.component';

describe('InfoCarpetaComponent', () => {
  let component: InfoCarpetaComponent;
  let fixture: ComponentFixture<InfoCarpetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCarpetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
