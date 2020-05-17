import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionDocumentoComponent } from './version-documento.component';

describe('VersionDocumentoComponent', () => {
  let component: VersionDocumentoComponent;
  let fixture: ComponentFixture<VersionDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
