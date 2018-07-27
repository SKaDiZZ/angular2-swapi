import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2SwapiModule } from 'angular2-swapi';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2SwapiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
