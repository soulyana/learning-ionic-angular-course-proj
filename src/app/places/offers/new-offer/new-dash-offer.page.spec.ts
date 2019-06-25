import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashOfferPage } from './new-dash-offer.page';

describe('NewDashOfferPage', () => {
  let component: NewDashOfferPage;
  let fixture: ComponentFixture<NewDashOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDashOfferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDashOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
