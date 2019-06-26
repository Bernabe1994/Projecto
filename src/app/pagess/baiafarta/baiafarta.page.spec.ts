import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiafartaPage } from './baiafarta.page';

describe('BaiafartaPage', () => {
  let component: BaiafartaPage;
  let fixture: ComponentFixture<BaiafartaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiafartaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiafartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
