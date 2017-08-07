import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwitterComponent } from './twitter.component';
import { SocialButtonComponent } from '../mock.component';

describe('TwitterComponent', () => {
  let fixture: ComponentFixture<TwitterComponent>;
  let el: HTMLElement;
  let comp: TwitterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialButtonComponent(),
        TwitterComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TwitterComponent);
    el = fixture.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('should return twitter share link', () => {
    comp.url = 'http://www.my.link';
    fixture.detectChanges();
    expect(comp.tweetUrl).toBe(`https://twitter.com/intent/tweet?url=${encodeURIComponent('http://www.my.link')}&text=&hashtags=&via=`);
  });
});
