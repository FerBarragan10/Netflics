import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('patternRectangle') patternRectangle: ElementRef | undefined;
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
}