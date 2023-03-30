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
import { RegularHeaderComponent } from './regularHeader/regular-header/regular-header.component';
import { ExtrasComponent } from './extrasPage/extras/extras.component';
import { SurfguidingComponent } from './surfguidingPage/surfguiding/surfguiding.component';
import { SurfingyogaComponent } from './surfingyogaPage/surfingyoga/surfingyoga.component';
import { HousefoodComponent } from './housefoodPage/housefood/housefood.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'surfinglessons',component:SurfComponent},
  {path: 'surfguiding', component:SurfguidingComponent},
  {path: 'surfingandyoga', component:SurfingyogaComponent},
  {path: 'extras', component:ExtrasComponent},
  {path: 'house', component:HousefoodComponent},
  {path: 'prices',component:PricesComponent}, /*on hold*/
  {path: 'contact',component:ContactComponent}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, HeaderComponent, RegularHeaderComponent, FooterComponent, RouterModule.forRoot(routes), RouterModule, CommonModule, NgFor, AboutComponent,SurfguidingComponent, SurfingyogaComponent, ExtrasComponent, HousefoodComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
