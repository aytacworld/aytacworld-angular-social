import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacebookComponent } from './facebook.component';
import { SocialButtonComponent } from '../mock.component';

describe('FacebookComponent', () => {
  let fixture: ComponentFixture<FacebookComponent>;
  let el: HTMLElement;
  let comp: FacebookComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialButtonComponent(),
        FacebookComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FacebookComponent);
    el = fixture.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('should return facebook share link', () => {
    comp.url = 'http://www.my.link';
    fixture.detectChanges();
    expect(comp.facebookUrl).toBe(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://www.my.link')}`);
  });
});
