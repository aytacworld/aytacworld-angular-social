import { Component, Input } from '@angular/core';

declare var twttr;

@Component({
  selector: 'aw-social',
  styleUrls: ['./social.component.scss'],
  template: `<div class="social">
    Share:
    <aw-social-twitter [title]="title" [url]="url" [hashtags]="hashtags" [via]="via"></aw-social-twitter>
    <aw-social-googleplus [url]="url"></aw-social-googleplus>
    <aw-social-facebook [url]="url"></aw-social-facebook>
  </div>`
})
export class SocialComponent {
  @Input() title: string;
  @Input() url: string;
  @Input() hashtags: Array<string>;
  @Input() via: string;
}
