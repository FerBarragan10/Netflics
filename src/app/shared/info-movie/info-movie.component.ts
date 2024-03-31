import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-movie',
  standalone: true,
  imports: [],
  templateUrl: './info-movie.component.html',
  styleUrl: './info-movie.component.scss'
})
export class InfoMovieComponent implements OnInit {
 
  @Input() series!:any;

  ngOnInit(): void {
    console.log("esta es la info de las series",this.series);
  }

}
