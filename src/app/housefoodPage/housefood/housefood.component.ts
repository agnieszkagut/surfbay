import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  standalone:true,
  selector: 'app-housefood',
  templateUrl: './housefood.component.html',
  styleUrls: ['./housefood.component.css'],
  imports: [RouterModule, RouterLink, NgFor]
})
export class HousefoodComponent {


  constructor(private service: SectionsService) {}
  sectionData:any;

  ngOnInit(): void {
    this.sectionData = this.service.houseSections;

  }

}
