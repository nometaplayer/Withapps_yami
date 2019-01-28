import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilsPage } from './conseils.page';

describe('ConseilsPage', () => {
  let component: ConseilsPage;
  let fixture: ComponentFixture<ConseilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseilsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
