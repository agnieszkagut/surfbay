import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-surfguiding',
  templateUrl: './surfguiding.component.html',
  styleUrls: ['./surfguiding.component.css'],
  imports: [RouterModule, RouterLink]
})
export class SurfguidingComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
