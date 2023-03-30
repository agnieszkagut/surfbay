import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css'],
  imports: [RouterModule, RouterLink]
})
export class ExtrasComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
