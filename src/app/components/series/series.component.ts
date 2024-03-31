import { Component } from '@angular/core';
import { CardsSlidersComponent } from '../../shared/cards-sliders/cards-sliders.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CardsSlidersComponent,NavbarComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {

}
