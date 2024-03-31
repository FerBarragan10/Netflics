import { Component } from '@angular/core';
import { CardsSlidersComponent } from '../../shared/cards-sliders/cards-sliders.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CardsSlidersComponent,NavbarComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {

}
