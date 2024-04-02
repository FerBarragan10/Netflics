import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cards-sliders',
  standalone: true,
  imports: [],
  templateUrl: './cards-sliders.component.html',
  styleUrl: './cards-sliders.component.scss'
})
export class CardsSlidersComponent implements OnInit{
  currentIndex: number = 1; // Índice actual del card
  peliculas: any[] = []; // Tu arreglo de películas
  displayedMovies: any[] = [];
  @Input() titulo="";
  @Input() titulo2="";
 
  
    ngOnInit(): void {
      console.log(this.titulo);
      this.cargarArrayPeliculas();
      this.updateDisplayedMovies();
    }
  
    cargarArrayPeliculas() {
      
        this.peliculas= [
          {
            "titulo": "Los Simpsons",
            "imagen": "../../../assets/cards/losSimpsons.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          },
          {
            "titulo": "Better Call Saul",
            "imagen": "../../../assets/cards/BetterCallSaul.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

          },
          {
            "titulo": "El Señor de los Anillos",
            "imagen": "../../../assets/cards/elSeñorDeLosAnillos.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

          },
          {
            "titulo": "Breaking Bad",
            "imagen": "../../../assets/cards/breakingBad.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

          },
          {
            "titulo": "Harry Potter",
            "imagen": "../../../assets/cards/harryPotter8.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

          },
          {
            "titulo": "Avengers",
            "imagen": "../../../assets/cards/avengers.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

          },
          {
            "titulo": "Joker",
            "imagen": "../../../assets/cards/joker.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

          },
          {
            "titulo": "It 2",
            "imagen": "../../../assets/cards/it.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          },
          {
            "titulo": "La monja",
            "imagen": "../../../assets/cards/laMonja.jpg",
            "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          },
      
        ]

      }

  
    updateDisplayedMovies() {
      const endIndex = this.currentIndex + 2; // Obtener el índice final de las películas a mostrar
      this.displayedMovies = this.peliculas.slice(this.currentIndex - 1, endIndex);
    }
  
    next(): void {
      console.log(this.currentIndex);
      if (this.currentIndex + 3 <= this.peliculas.length) {
        this.currentIndex += 3;
        this.updateDisplayedMovies();
      }
    }
  
    prev(): void {
      if (this.currentIndex > 1) {
        this.currentIndex -= 3;
        this.updateDisplayedMovies();
      }
    }



  }
  


