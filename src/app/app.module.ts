import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './componentFooter/footer/footer.component';
// import { HeaderModule } from './componentSurf/header/header.module';
import { HomeComponent } from './homePage/home/home.component';
import { AboutComponent } from './aboutPage/about/about.component';
import { SurfComponent } from './surfPage/surf/surf.component';
import { PricesComponent } from './pricesPage/prices/prices.component';
import { ContactComponent } from './contactPage/contact/contact.component';
import { HeaderComponent } from './componentSurf/header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { RegularHeaderComponent } from './componentSurf/regularHeader/regular-header/regular-header.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'surfactivities',component:SurfComponent},
  {path: 'prices',component:PricesComponent},
  {path: 'contact',component:ContactComponent}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, HeaderComponent, FooterComponent, RouterModule.forRoot(routes), RouterModule, CommonModule, NgFor, RegularHeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
