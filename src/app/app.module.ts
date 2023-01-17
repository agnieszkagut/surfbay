import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component.js';
import { FooterComponent } from './componentFooter/footer/footer.component.js';
// import { HeaderModule } from './componentSurf/header/header.module';
import { HomeComponent } from './homePage/home/home.component.js';
import { AboutComponent } from './aboutPage/about/about.component.js';
import { SurfComponent } from './surfPage/surf/surf.component.js';
import { PricesComponent } from './pricesPage/prices/prices.component.js';
import { ContactComponent } from './contactPage/contact/contact.component.js';
import { HeaderComponent } from './componentSurf/header/header.component.js';
import { CommonModule, NgFor } from '@angular/common';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'surfing',component:SurfComponent},
  {path: 'prices',component:PricesComponent},
  {path: 'contact',component:ContactComponent}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, HeaderComponent, FooterComponent, RouterModule.forRoot(routes), RouterModule, CommonModule, NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
