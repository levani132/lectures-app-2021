import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { AppRoutingModule } from './app-routing.module';
import { authGuard } from './app-guard.service';
import { fifthResolver } from './fifth/fifth-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    authGuard,
    fifthResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
