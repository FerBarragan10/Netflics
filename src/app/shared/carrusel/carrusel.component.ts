import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
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
          titulo: "Mandalorian",
          subtitulo: "Serie, 1 temporada",
          item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          img: "../../../assets/carrusel/mandalorian.webp",
          trailer:"../../../assets/videos/mandalorian.mp4",
          capitulo:"../../../assets/videos/capituloMandalorian.mp4"
      },
      {
          titulo: "Mr Robot",
          subtitulo: "Serie, temp 2",
          item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          img: "../../../assets/carrusel/mrRobot.jpg",
          trailer:"../../../assets/videos/mrRobot.mp4",
          capitulo:"../../../assets/videos/mrRobot.mp4"
      },
    
      {
          titulo: "Los Simpsons",
          subtitulo: "Serie, 30 temporadas",
          item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
          img: "../../../assets/carrusel/losSimpsons.jpg",
          trailer:"../../../assets/videos/intro.mp4",
          capitulo:"../../../assets/videos/capitulo.mp4"
      }
  ];
  
      
    }

}
