import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { RegularHeaderComponent } from 'src/app/regularHeader/regular-header/regular-header.component';


import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [NgFor, RouterModule, RouterLink]
})
export class AboutComponent implements OnInit {
  
  constructor(private service: SectionsService) {}
  sectionData:any;

  ngOnInit(): void {
    this.sectionData = this.service.aboutSections;
  }

}
