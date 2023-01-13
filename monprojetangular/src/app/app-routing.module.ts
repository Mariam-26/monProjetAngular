import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonProjetListComponent } from './mon-projet-list/mon-projet-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'monPojetAngulars', component: MonProjetListComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  // export class AppRoutingModule {}
  // imports: [BrowserModule, AppRoutingModule],
})
export class AppRoutingModule {}
