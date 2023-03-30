import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/componentSurf/header/header.component';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgFor, HeaderComponent, RouterLink, RouterModule]
})
export class HomeComponent implements OnInit{

  constructor(private service: SectionsService) {}
  sectionData:any;

  ngOnInit(): void {
    this.sectionData = this.service.sections;
  }

}
