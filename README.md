# aytacworld-angular-social

Share links to social media services, currently it supports only Twitter, Facebook and GooglePlus.

## Install

`npm install --save aytacworld-angular-social`

## Usage

app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialModule } from 'aytacworld-angular-social';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

app.component.ts
```typescript
@Component({
  selector: 'my-app',
  template: `<aw-social [title]="myTitle" [url]="myUrl" [hashtags]="myTags" [via]="myVia"></aw-social>`,
})
export class App {
  myTitle: string = 'My awesome title';
  myUrl: string = 'http://www.example.com';
  myTags: Array<string> = ['awesome', 'example'];
  myVia: string = '@userX';
}
```

## Api

|Input       |  Description   |  Type  |  Default  |
|------------|----------------|--------|-----------|
|title    |  Title to send to the social plugin | string | (empty) |
|url    |  Url to send to the social plugin | string | (empty) |
|hashtags    |  Hashtags to send to the social plugin | string[] | (empty) |
|via    |  Via to send to the social plugin | string | (empty) |

## Test

`npm test`

## Examples

[http://embed.plnkr.co/XYlnXm/](http://embed.plnkr.co/XYlnXm/)

## MIT License

Copyright (c) 2017 Adem Aytaç

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
