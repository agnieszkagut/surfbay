import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor() { }
    //sections na razie nie dziala CommonModule
    sections=
    [
    {
      id:1,
      sectionName:"surfing lessons",
      sectionDesc:"We teach surfing on every level, from beginner to advanced",
      sectionImg:"../../../assets/img/1.png"
    },
    {
      id:2,
      sectionName:"surf guiding",
      sectionDesc:"We will show you the best spots to surf depends on weather in Taghazout, Tamraght, Agadir and more",
      sectionImg:"../../../assets/img/2.png"
    },
    {
      id:3,
      sectionName:"sandboarding",
      sectionDesc:"Another fun way to use a surfboard is boarding on a desert and we are here to show you how",
      sectionImg:"../../../assets/img/3.png"
    },
    {
      id:4,
      sectionName:"attractions of Morocco",
      sectionDesc:"With us you don't miss local attractions lika Paradise Valley with beautiful natural pools or riding on moroccan camel",
      sectionImg:"../../../assets/img/4.png"
    }
    ]

  
}
