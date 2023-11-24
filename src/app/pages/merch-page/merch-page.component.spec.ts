/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MerchPageComponent } from './merch-page.component';

describe('MerchPageComponent', () => {
  let component: MerchPageComponent;
  let fixture: ComponentFixture<MerchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
