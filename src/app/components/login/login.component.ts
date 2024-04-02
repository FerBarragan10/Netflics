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


  iniciarSesion(): void {
    // Mostrar el spinner al iniciar sesión
    this.showSpinner = true;

    // Simular un proceso de inicio de sesión con un retardo de 5 segundos
    setTimeout(() => {
      // Ocultar el spinner después de 5 segundos
      this.showSpinner = false;

      // Redirigir a la página de perfiles después de iniciar sesión
      this.router.navigate(['/perfiles']);
    }, 5000);
}
}