import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SocialComponent } from './social.component';
import { FacebookComponent, GooglePlusComponent, TwitterComponent } from './providers';
import { SocialButtonComponent } from './social-button.component';

@NgModule({
  declarations: [
    SocialButtonComponent,
    TwitterComponent,
    GooglePlusComponent,
    FacebookComponent,
    SocialComponent
  ],
  exports: [
    SocialComponent
  ]
})
export class SocialModule {
  constructor ( @Optional() @SkipSelf() parentModule: SocialModule) {
    if (parentModule) { throw new Error('SocialModule is already loaded.'); }
  }
}
