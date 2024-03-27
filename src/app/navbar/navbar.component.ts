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
  constructor(private router:Router){

  }


  logOut(){
    this.router.navigate(['/login']);
  }
  clickPlanes(){
    this.router.navigate(['/planes']);
  }



  openNotificaciones() {
   this.clicked=!this.clicked;
  }
}