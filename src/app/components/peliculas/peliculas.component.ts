import { Component } from '@angular/core';
import { CardsSlidersComponent } from '../../shared/cards-sliders/cards-sliders.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CardsSlidersComponent,NavbarComponent,FormsModule,FooterComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {
  titulo="Recomendadas por Netflics";
  titulo2="Favoritos";
  currentIndex=1;
  searchText=""
  displayedMovies:any[]=[];
  ngOnInit() {
    this.updateDisplayedMovies();
  }
  peliculas = [
    {
      titulo: "Joker",
      genero:"drama",
      año:"2018",
      imagen: "../../../assets/cards/joker.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

    },
    {
      titulo: "It 2",
      año:"2020",
      genero:"terror",
      imagen: "../../../assets/cards/it.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
    },
    {
      titulo: "La monja",
      año:"2020",
      genero:"terror",
      imagen: "../../../assets/cards/laMonja.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
    },
    {
      titulo: "Harry Potter y la piedra filosofal",
      genero:"ciencia ficcion",
      año:"2001",
      imagen: "../../../assets/cards/HarryPotter1.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

    },
    {
      titulo: " Harry Potter y el prisionero de askaban",
      genero:"ciencia ficcion",
      año:"2002",
      imagen: "../../../assets/cards/harryPotter2.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
    
    },
    {
      titulo: "Harry Potter y las reliquias de la muerte",
      genero:"ciencia ficcion",
      año:"2005",
      imagen: "../../../assets/cards/harryPotter8.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

    },
   
    {
      titulo: "Breaking Bad",
      año:"2013",
      genero:"suspenso",
      imagen: "../../../assets/cards/breakingBad.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

    },
    {
      titulo: "Matrix",
      año:"2001",
      genero:"ciencia ficcion",
      imagen: "../../../assets/cards/matrix.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

    },
    {
      titulo: "Avengers",
      año:"2018",
      genero:"ciencia ficcion",
      imagen: "../../../assets/cards/avengers.jpg",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",

    },
  
  ];
  originalPeliculas = [...this.peliculas]; 
  get filteredPelis(): any[] {
    if (!this.searchText) {
      return this.originalPeliculas;
    }
    return this.originalPeliculas.filter(peli =>
      peli.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
      peli.genero.toLowerCase().includes(this.searchText.toLowerCase()) ||
      peli.año.toLowerCase().includes(this.searchText.toLowerCase()) ||
      peli.imagen.toLowerCase().includes(this.searchText.toLowerCase()) ||
      peli.item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

   /*updateDisplayedMovies() {
    const endIndex = this.currentIndex + 2;
    this.displayedMovies = this.filteredPelis.slice(this.currentIndex - 1, endIndex);
  }*/


 updateDisplayedMovies() {
    const endIndex = Math.min(this.currentIndex + 2, this.filteredPelis.length);
    this.displayedMovies = this.filteredPelis.slice(this.currentIndex - 1, endIndex);
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
    if (!this.searchText) {
      this.peliculas = this.originalPeliculas;
    } else {
      this.peliculas = this.originalPeliculas.filter(peli =>
        peli.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
        peli.genero.toLowerCase().includes(this.searchText.toLowerCase()) ||
        peli.año.toLowerCase().includes(this.searchText.toLowerCase()) ||
        peli.imagen.toLowerCase().includes(this.searchText.toLowerCase()) ||
        peli.item.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.currentIndex = 1;
    this.updateDisplayedMovies();
  }

  next(): void {
    if (this.currentIndex + 3 <= this.filteredPelis.length) {
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