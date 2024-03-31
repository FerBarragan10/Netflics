import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-detalles-de-peli',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './detalles-de-peli.component.html',
  styleUrl: './detalles-de-peli.component.scss'
})
export class DetallesDePeliComponent implements OnInit {
  data:any;
  titulo:string="";
  item:string="";
  imagen:any;
  ngOnInit(): void {
    this.data=localStorage.getItem('infoSerie');
    const serie = JSON.parse(this.data);

    console.log("la dataaaa",serie);
    this.titulo=serie.titulo;
    this.imagen=serie.img;
    this.item=serie.item;
  }

    darLike(): void {
    const heart: HTMLElement | null = document.querySelector('.heart');
    if (heart) {
        heart.classList.toggle('clicked');
    }
}



}
