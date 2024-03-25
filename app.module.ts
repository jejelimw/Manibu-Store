import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header/landing-page-header.component';
import { SearchComponent } from './search/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageHeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
