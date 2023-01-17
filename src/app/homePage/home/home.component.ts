import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgFor]
})
export class HomeComponent implements OnInit{

  constructor(private service: SectionsService) {}
  sectionData:any;

  ngOnInit(): void {
    this.sectionData = this.service.sections;
  }

}
