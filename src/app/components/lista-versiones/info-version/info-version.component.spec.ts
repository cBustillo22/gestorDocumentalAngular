import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVersionComponent } from './info-version.component';

describe('InfoVersionComponent', () => {
  let component: InfoVersionComponent;
  let fixture: ComponentFixture<InfoVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
