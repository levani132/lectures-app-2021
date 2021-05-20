import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ErrorAlertComponent} from './ErrorAlert/ErrorAlert.component';
import { SuccessAlert } from './SuccessAlert/SuccessAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    ErrorAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
