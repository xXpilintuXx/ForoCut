import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomseguroPipe } from './pipe/domseguro.pipe';

import { AppComponent } from './app.component';
import { HeadherComponent } from './component/headher/headher.component';
import { TextcardComponent } from './component/shared/textcard/textcard.component';
import { CarrercardComponent } from './component/shared/carrercard/carrercard.component';
import { TiempopublicadoPipe } from './pipe/tiempopublicado.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './component/shared/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadherComponent,
    TextcardComponent,
    CarrercardComponent,
    DomseguroPipe,
    TiempopublicadoPipe,
    EditorComponent
  ],
  imports: [
    CKEditorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
