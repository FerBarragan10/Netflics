import { Component } from '@angular/core';
import { CardsFavoritosComponent } from '../../shared/cards-favoritos/cards-favoritos.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CardsFavoritosComponent,NavbarComponent,FooterComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {

}
