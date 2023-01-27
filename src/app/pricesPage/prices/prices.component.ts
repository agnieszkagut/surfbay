import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegularHeaderComponent } from 'src/app/componentSurf/regularHeader/regular-header/regular-header.component';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-prices',
  standalone: true,
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  imports: [RegularHeaderComponent, RouterModule, NgFor]
})
export class PricesComponent {

  constructor(private service: SectionsService) {}
  sectionData:any;
  sectionData2:any;

  ngOnInit(): void {
    this.sectionData = this.service.houseSections;
    this.sectionData2 = this.service.activitiesSections;
  }
}
