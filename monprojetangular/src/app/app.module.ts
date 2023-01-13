import { AppRoutingModule } from './app-routing.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { MonProjetAngularComponent } from './mon-projet-angular/mon-projet-angular.component';
import { MonProjetListComponent } from './mon-projet-list/mon-projet-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MonProjetAngularComponent,
    MonProjetListComponent,
    HeaderComponent,
    LandingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
