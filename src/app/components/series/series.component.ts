import { Component } from '@angular/core';
import { CardsSlidersComponent } from '../../shared/cards-sliders/cards-sliders.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CardsSlidersComponent,NavbarComponent,FooterComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {
  titulo="Recomendadas por Netflics";
  titulo2="Favoritos";
  currentIndex=1;
  searchText=""
  displayedSeries:any[]=[];
  ngOnInit() {
    this.updateDisplayedMovies();
  }
  series = [
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
  originalSeries = [...this.series]; 
  get filteredSeries(): any[] {
    if (!this.searchText) {
      return this.originalSeries;
    }
    return this.originalSeries.filter(serie =>
      serie.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
      serie.genero.toLowerCase().includes(this.searchText.toLowerCase()) ||
      serie.año.toLowerCase().includes(this.searchText.toLowerCase()) ||
      serie.imagen.toLowerCase().includes(this.searchText.toLowerCase()) ||
      serie.item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

   /*updateDisplayedMovies() {
    const endIndex = this.currentIndex + 2;
    this.displayedMovies = this.filteredPelis.slice(this.currentIndex - 1, endIndex);
  }*/


 updateDisplayedMovies() {
    const endIndex = Math.min(this.currentIndex + 2, this.filteredSeries.length);
    this.displayedSeries = this.filteredSeries.slice(this.currentIndex - 1, endIndex);
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
    if (!this.searchText) {
      this.series = this.originalSeries;
    } else {
      this.series = this.originalSeries.filter(serie =>
        serie.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
        serie.genero.toLowerCase().includes(this.searchText.toLowerCase()) ||
        serie.año.toLowerCase().includes(this.searchText.toLowerCase()) ||
        serie.imagen.toLowerCase().includes(this.searchText.toLowerCase()) ||
        serie.item.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.currentIndex = 1;
    this.updateDisplayedMovies();
  }

  next(): void {
    if (this.currentIndex + 3 <= this.filteredSeries.length) {
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
