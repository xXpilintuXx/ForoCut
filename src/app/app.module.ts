import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadherComponent } from './component/headher/headher.component';
import { TextcardComponent } from './component/shared/textcard/textcard.component';
import { CarrercardComponent } from './component/shared/carrercard/carrercard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadherComponent,
    TextcardComponent,
    CarrercardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
