import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegularHeaderComponent } from 'src/app/componentSurf/regularHeader/regular-header/regular-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [RegularHeaderComponent, RouterModule]
})
export class ContactComponent {

}
