import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'aw-social-button',
  styles: [`a {border: 1px solid;border-radius: 5px;font-size: 0.8em; padding: 3px;text-decoration: none;}`],
  template: `<a #el href="{{url}}" onclick="javascript:window.open(this.href,
  '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">{{title}}</a>`
})
export class SocialButtonComponent implements OnInit {
  @ViewChild('el') el: ElementRef;
  @Input() title: string;
  @Input() url: string;
  @Input() front: string = '#000';
  @Input() back: string = '#FFF';
  ngOnInit (): void {
    const el: HTMLElement = this.el.nativeElement;
    el.setAttribute('style', `color:${this.front}; background-color:${this.back}; border-color:${this.back}`);
  }
}
