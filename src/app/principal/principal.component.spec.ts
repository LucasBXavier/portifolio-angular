/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConteudoComponent } from './principal.component';

describe('ConteudoComponent', () => {
  let component: ConteudoComponent;
  let fixture: ComponentFixture<ConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConteudoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
