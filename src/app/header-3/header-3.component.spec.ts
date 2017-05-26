/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Header3Component } from './header-3.component';

describe('Header3Component', () => {
  let component: Header3Component;
  let fixture: ComponentFixture<Header3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
