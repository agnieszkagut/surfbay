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
      sectionImg:"./assets/img/11.jpg"
    },
    {
      id:2,
      sectionName:"surf guiding",
      sectionDesc:"We will show you the best spots to surf depends on weather in Taghazout, Tamraght, Agadir and more",
      sectionImg:"./assets/img/222.jpg"
    },
    {
      id:3,
      sectionName:"sandboarding",
      sectionDesc:"Another fun way to use a surfboard is boarding on a desert and we are here to show you how",
      sectionImg:"./assets/img/333.png"
    },
    {
      id:4,
      sectionName:"more activities",
      sectionDesc:"With us you don't miss local attractions like Paradise Valley with beautiful natural pools or riding on moroccan camel",
      sectionImg:"./assets/img/44.jpg"
    }
    ];

    aboutSections=[
      {
        id:1,
        sectionName:"experience",
        sectionDesc:"As couches we have experienced surf instruction for years. You will be provided with top-notch instruction, equipment, and accommodations",
        sectionImg:"./assets/img/aboutus4.jpg"
      },      {
        id:2,
        sectionName:"solid training and feedback",
        sectionDesc:"Couches will offer tailored lessons to help you make the most of your time. You will get expert guidance and feedbacks",
        sectionImg:"./assets/img/aboutus.jpg"
      },
      {
        id:3,
        sectionName:"making it fun",
        sectionDesc:"We represent patient and passionate about sharing the joys of surfing with others while immersing you in the beautiful moroccan coastal waves and the surf culture",
        sectionImg:"./assets/img/aboutus2.png"
      }
    ]
  
}
