import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementPage } from './abonnement.page';

describe('AbonnementPage', () => {
  let component: AbonnementPage;
  let fixture: ComponentFixture<AbonnementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonnementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
