import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GooglePlusComponent } from './googleplus.component';
import { SocialButtonComponent } from '../../tools/mock-helper';

describe('GooglePlusComponent', () => {
  let fixture: ComponentFixture<GooglePlusComponent>;
  let el: HTMLElement;
  let comp: GooglePlusComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialButtonComponent(),
        GooglePlusComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GooglePlusComponent);
    el = fixture.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('should return googleplus share link', () => {
    comp.url = 'http://www.my.link';
    fixture.detectChanges();
    expect(comp.googleUrl).toBe(`https://plus.google.com/share?url=${encodeURIComponent('http://www.my.link')}`);
  });
});
