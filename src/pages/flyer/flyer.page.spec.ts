import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerPage } from './flyer.page';

describe('FlyerPage', () => {
  let component: FlyerPage;
  let fixture: ComponentFixture<FlyerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
