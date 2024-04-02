import { Component, ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  searchText: string = '';

  @ViewChild('patternRectangle') patternRectangle: ElementRef | undefined;
  @Output() searchEvent = new EventEmitter<string>();



  clicked: boolean=true;
  clickedUser:boolean=true;
  clickedNumber: boolean=true;

  constructor(private router:Router){

  }


  logOut(){
    this.router.navigate(['/login']);
  }
  clickPlanes(){
    this.router.navigate(['/planes']);
  }


  irAlHome(){
    this.router.navigate(['/home'])
   }

   irAPeliculas(){
    this.router.navigate(['/peliculas']);

   }
   irASeries(){
    this.router.navigate(['/series']);

   }
   irAFavoritos(){
    this.router.navigate(['/favoritos']);

   }

  openNotificaciones() {
   this.clicked=!this.clicked;
   
   this.clickedNumber=false;
  }
  openUser() {
    this.clickedUser=!this.clickedUser;

   }
   busqueda(){
    console.log(this.searchText);
    this.searchEvent.emit(this.searchText);

  }
}