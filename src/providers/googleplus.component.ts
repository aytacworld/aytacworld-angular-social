import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-social-googleplus',
  template: `<aw-social-button [url]="googleUrl" [title]="'Google+'" [front]="'#fff'" [back]="'#dd4b39'"></aw-social-button>`
})
export class GooglePlusComponent implements OnInit {
  @Input() url: string;
  googleUrl: string;

  ngOnInit (): void {
    this.googleUrl = `https://plus.google.com/share?url=${encodeURIComponent(this.url)}`;
  }
}
