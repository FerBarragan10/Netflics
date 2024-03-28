import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-favoritos',
  standalone: true,
  imports: [],
  templateUrl: './cards-favoritos.component.html',
  styleUrl: './cards-favoritos.component.scss'
})
export class CardsFavoritosComponent {


  currentIndex: number = 1; 


  next(): void {
    if (this.currentIndex === 1) {
      this.currentIndex = 2; 
    } else if (this.currentIndex === 2) {
      this.currentIndex = 3; 
    }
  }

  prev(): void {
    if (this.currentIndex === 2) {
      this.currentIndex = 1;
    } else if (this.currentIndex === 3) {
      this.currentIndex = 2; 
    }
  }
}
