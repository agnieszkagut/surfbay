import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegularHeaderComponent } from 'src/app/componentSurf/regularHeader/regular-header/regular-header.component';

@Component({
  selector: 'app-surf',
  standalone: true,
  templateUrl: './surf.component.html',
  styleUrls: ['./surf.component.css'],
  imports: [RegularHeaderComponent, RouterModule]
})
export class SurfComponent {

}
