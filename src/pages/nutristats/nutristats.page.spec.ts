import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutristatsPage } from './nutristats.page';

describe('NutristatsPage', () => {
  let component: NutristatsPage;
  let fixture: ComponentFixture<NutristatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutristatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutristatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
