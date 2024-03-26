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




  constructor(private router: Router){

  }

  ngOnInit(): void {
      
  }


  iniciarSesion(){
    this.router.navigate(['/perfiles']);   
  }

}
