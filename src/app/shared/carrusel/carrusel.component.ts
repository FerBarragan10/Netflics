import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InfoMovieComponent } from '../info-movie/info-movie.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [InfoMovieComponent],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})
export class CarruselComponent implements OnInit {
  series:any[]=[];
  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.crearArrayPelis();

  }

  verAhora(serie:any){
    console.log("la serie para mirar es", serie);
    localStorage.setItem("infoSerie", JSON.stringify(serie));
   
    this.router.navigate(['/detalles-de-peli']);
  }

 
  crearArrayPelis(){
    // @ts-ignore
    this.series = [
      {
          "titulo": "Mandalorian",
          "subtitulo": "Serie, 1 temporada",
          "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          "img": "../../../assets/carrusel/mandalorian.webp"
      },
      {
          "titulo": "Mr Robot",
          "subtitulo": "Serie, temp 2",
          "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          "img": "../../../assets/carrusel/mrRobot.jpg"
      },
      {
          "titulo": "Los Simpsons",
          "subtitulo": "Serie, 30 temporadas",
          "item": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          "img": "../../../assets/carrusel/losSimpsons.jpg"
      }
  ];
  
      
    }

}