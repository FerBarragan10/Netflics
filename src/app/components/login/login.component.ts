import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  showSpinner: boolean=false;




  constructor(private router: Router){

  }

  ngOnInit(): void {
      
  }


  iniciarSesion() {
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner=false;
      this.router.navigate(['/perfiles']);
    }, 5000);
  }

}
