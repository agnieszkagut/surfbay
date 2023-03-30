import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegularHeaderComponent } from 'src/app/regularHeader/regular-header/regular-header.component';

@Component({
  selector: 'app-surf',
  standalone: true,
  templateUrl: './surf.component.html',
  styleUrls: ['./surf.component.css'],
  imports: [RegularHeaderComponent, RouterModule]
})
export class SurfComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
