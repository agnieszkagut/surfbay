import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-surfingyoga',
  templateUrl: './surfingyoga.component.html',
  styleUrls: ['./surfingyoga.component.css'],
  imports: [RouterModule, RouterLink]
})
export class SurfingyogaComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
