import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from 'src/app/componentSurf/header/header.component';
import { RegularHeaderComponent } from 'src/app/componentSurf/regularHeader/regular-header/regular-header.component';



@NgModule({
  declarations: [AboutModule],
  imports: [
    BrowserModule, CommonModule, NgFor, HeaderComponent, RegularHeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class AboutModule { }