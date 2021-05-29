import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    ErrorAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
