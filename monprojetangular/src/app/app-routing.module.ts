import { SingleProjetAngularComponent } from './single-projet-angular/single-projet-angular.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonProjetListComponent } from './mon-projet-list/mon-projet-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'monPojetAngulars/:id', component: SingleProjetAngularComponent},
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
