import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarpetasComponent } from './lista-carpetas.component';

describe('ListaCarpetasComponent', () => {
  let component: ListaCarpetasComponent;
  let fixture: ComponentFixture<ListaCarpetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCarpetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarpetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
