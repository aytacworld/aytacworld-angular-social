import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-social-twitter',
  template: `<aw-social-button [url]="tweetUrl" [title]="'Twitter'" [front]="'#fff'" [back]="'#1DA1F2'"></aw-social-button>`
})
export class TwitterComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() hashtags: Array<string>;
  @Input() via: string;

  tweetUrl: string;

  ngOnInit (): void {
    const twitterUrl = `https://twitter.com/intent/tweet?`;
    const hashtags = `hashtags=${encodeURIComponent((this.hashtags || []).join(','))}`;
    const text = `text=${encodeURIComponent(this.title || '')}`;
    const url = `url=${encodeURIComponent(this.url)}`;
    const via = `via=${encodeURIComponent(this.via || '')}`;
    this.tweetUrl = `${twitterUrl}${url}&${text}&${hashtags}&${via}`;
  }
}
