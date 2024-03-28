import { Component } from '@angular/core';
import { CarruselComponent } from '../../shared/carrusel/carrusel.component';
import { CardsSlidersComponent } from '../../shared/cards-sliders/cards-sliders.component';
import { CardsFavoritosComponent } from '../../shared/cards-favoritos/cards-favoritos.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarruselComponent,CardsSlidersComponent,CardsFavoritosComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
