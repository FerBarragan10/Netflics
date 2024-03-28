import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{
  @Input() titulo!: string;
  @Input() tituloPerfil!: string;
  @Input() miCuenta!: boolean;
  showEditIcon: boolean = false;


  constructor(private router:Router){

  }



  ngOnInit(): void {
    console.log(this.titulo);
    console.log(this.tituloPerfil);
    console.log(this.miCuenta);
    if(this.titulo==undefined){
      this.titulo=this.tituloPerfil
    }
  }



  showEdit() {
    this.showEditIcon = true;
  }

  hideEdit() {
    this.showEditIcon = false;
  }

  irAlHome(){
   this.router.navigate(['/home'])
  }

}
