import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupDirective } from './Popup/popup.directive';
import { AnimeDirective } from './anime/anime.directive';

@NgModule({
  declarations: [
    AppComponent,
    PopupDirective,
    AnimeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
