import { Component } from '@angular/core';
import { CarruselComponent } from '../../shared/carrusel/carrusel.component';
import { CardsSlidersComponent } from '../../shared/cards-sliders/cards-sliders.component';
import { CardsFavoritosComponent } from '../../shared/cards-favoritos/cards-favoritos.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarruselComponent,CardsSlidersComponent,CardsFavoritosComponent,NavbarComponent,FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
