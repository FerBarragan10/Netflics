import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-favoritos',
  standalone: true,
  imports: [],
  templateUrl: './cards-favoritos.component.html',
  styleUrl: './cards-favoritos.component.scss'
})
export class CardsFavoritosComponent implements OnInit{
  currentIndex: number = 1; // Índice actual del card
  peliculas: any[] = []; // Tu arreglo de películas
  displayedMovies: any[] = [];
 
  
  
  
  ngOnInit(): void {
    this.cargarArrayPeliculas();
    this.updateDisplayedMovies();
  }

  cargarArrayPeliculas() {
    
      this.peliculas= [
        {
          "titulo": "Los Simpsons",
          "imagen": "../../../assets/cards/losSimpsons.jpg"
        },
        {
          "titulo": "Better Call Saul",
          "imagen": "../../../assets/cards/BetterCallSaul.jpg"
        },
        {
          "titulo": "El Señor de los Anillos",
          "imagen": "../../../assets/cards/elSeñorDeLosAnillos.jpg"
        },
        {
          "titulo": "Breaking Bad",
          "imagen": "../../../assets/cards/breakingBad.jpg"
        },
        {
          "titulo": "Harry Potter",
          "imagen": "../../../assets/cards/harryPotter8.jpg"
        },
        {
          "titulo": "Avengers",
          "imagen": "../../../assets/cards/avengers.jpg"
        },
        {
          "titulo": "Joker",
          "imagen": "../../../assets/cards/joker.jpg"
        },
        {
          "titulo": "It 2",
          "imagen": "../../../assets/cards/it.jpg"
        },
        {
          "titulo": "La monja",
          "imagen": "../../../assets/cards/laMonja.jpg"
        },
    
      ]
    }


  updateDisplayedMovies() {
    const endIndex = this.currentIndex + 4; // Obtener el índice final de las películas a mostrar
    this.displayedMovies = this.peliculas.slice(this.currentIndex - 1, endIndex);
  }

  next(): void {
    console.log(this.currentIndex);
    if (this.currentIndex + 5 <= this.peliculas.length) {
      this.currentIndex += 5;
      this.updateDisplayedMovies();
    }
  }

  prev(): void {
    if (this.currentIndex > 1) {
      this.currentIndex -= 5;
      this.updateDisplayedMovies();
    }
  }
}
