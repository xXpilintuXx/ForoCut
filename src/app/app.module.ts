import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomseguroPipe } from './pipe/domseguro.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { HeadherComponent } from './component/headher/headher.component';
import { TextcardComponent } from './component/shared/textcard/textcard.component';
import { CarrercardComponent } from './component/shared/carrercard/carrercard.component';
import { TiempopublicadoPipe } from './pipe/tiempopublicado.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './component/shared/editor/editor.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadherComponent,
    TextcardComponent,
    CarrercardComponent,
    DomseguroPipe,
    TiempopublicadoPipe,
    EditorComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    TimeAgoPipe
  ],
  imports: [
    CKEditorModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
