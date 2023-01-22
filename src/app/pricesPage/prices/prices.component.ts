import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegularHeaderComponent } from 'src/app/componentSurf/regularHeader/regular-header/regular-header.component';

@Component({
  selector: 'app-prices',
  standalone: true,
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  imports: [RegularHeaderComponent, RouterModule]
})
export class PricesComponent {

}
