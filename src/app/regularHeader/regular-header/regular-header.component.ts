import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-regular-header',
  templateUrl: './regular-header.component.html',
  styleUrls: ['./regular-header.component.css'],
  imports: [RouterModule, RouterLink]
})
export class RegularHeaderComponent {

}
