import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-social-facebook',
  template: `<aw-social-button [url]="facebookUrl" [title]="'Facebook'" [front]="'#fff'" [back]="'#3b5998'"></aw-social-button>`
})
export class FacebookComponent implements OnInit {
  @Input() url: string;
  facebookUrl: string;

  ngOnInit (): void {
    this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url)}`;
  }
}
