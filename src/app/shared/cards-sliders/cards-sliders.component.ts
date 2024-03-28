import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-sliders',
  standalone: true,
  imports: [],
  templateUrl: './cards-sliders.component.html',
  styleUrl: './cards-sliders.component.scss'
})
export class CardsSlidersComponent {
  currentIndex: number = 1; // Índice actual del card


  next(): void {
    if (this.currentIndex === 1) {
      this.currentIndex = 2; // Incrementa el índice para ir al siguiente conjunto de cards
    } else if (this.currentIndex === 2) {
      this.currentIndex = 3; // Incrementa el índice para ir al siguiente conjunto de cards
    }
  }

  prev(): void {
    if (this.currentIndex === 2) {
      this.currentIndex = 1; // Decrementa el índice para ir al conjunto de cards anterior
    } else if (this.currentIndex === 3) {
      this.currentIndex = 2; // Decrementa el índice para ir al conjunto de cards anterior
    }
  }

}
