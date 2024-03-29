import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor() { }

    sections=
    [
    {
      id:1,
      sectionName:"surfing lessons",
      sectionDesc:"We will teach you surfing whether you are beginner or more experienced",
      sectionImg:"./assets/img/11.jpg",
      sectionLink:"/surfactivities",
      sectionButton:"Read more about surfing lessons"
    },
    {
      id:2,
      sectionName:"surf guiding",
      sectionDesc:"We will show you the best spots to surf depends on weather in Taghazout, Tamraght, Agadir and more",
      sectionImg:"./assets/img/2222.png",
      sectionLink:"/surfactivities",
      sectionButton:"Read more about surf guiding"
    },
    {
      id:3,
      sectionName:"sandboarding",
      sectionDesc:"Another fun way to use a surfboard is boarding on a desert and we are here to show you how",
      sectionImg:"./assets/img/333.png",
      sectionLink:"/surfactivities",
      sectionButton:"Read more about sandboarding"
    },
    {
      id:4,
      sectionName:"more activities",
      sectionDesc:"With us you don't miss local attractions like Paradise Valley with beautiful natural pools or riding on moroccan camel",
      sectionImg:"./assets/img/44.jpg",
      sectionLink:"/surfactivities",
      sectionButton:"Read more about other activities"
    }
    ];

    aboutSections=[
      {
        id:1,
        sectionName:"solid training and feedback",
        sectionDesc:"We will offer tailored lessons to help you make the most of your time. You will get expert guidance and feedbacks",
        sectionImg:"./assets/img/aboutus.jpg"
      },      
      {
        id:2,
        sectionName:"experience",
        sectionDesc:"As coaches we have experienced surf instruction for years. You will be provided with top-notch instruction, equipment, accommodation and best experience",
        sectionImg:"./assets/img/aboutus4.jpg"
      },      
      {
        id:3,
        sectionName:"making it fun",
        sectionDesc:"We represent patient and passionate about sharing the joys of surfing with others while immersing you in the beautiful moroccan coastal waves and the surf culture",
        sectionImg:"./assets/img/aboutus2.png"
      }
    ]
  
    houseSections=[
      {
        id:1,
        sectionImg:"./assets/img/house.jpg"
      },      {
        id:2,
        sectionImg:"./assets/img/house2.jpg"
      }
    ]

    activitiesSections=[
      {
        id:1,
        sectionImg:"./assets/img/activities.jpg"
      },      {
        id:2,
        sectionImg:"./assets/img/activities2.jpg"
      }
    ]
  
}
