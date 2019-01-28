import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriePage } from './galerie.page';

describe('GaleriePage', () => {
  let component: GaleriePage;
  let fixture: ComponentFixture<GaleriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
