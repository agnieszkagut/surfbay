import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from 'src/app/componentSurf/header/header.component';



@NgModule({
  declarations: [HomeModule],
  imports: [
    BrowserModule, CommonModule, NgFor, HeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }//
