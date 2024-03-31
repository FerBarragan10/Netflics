import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  preguntas:any[]=[];

  ngOnInit(): void {
    this.crearArrayPreguntasFrecuentes();
  }


  crearArrayPreguntasFrecuentes(){
    // @ts-ignore
     this.preguntas = [
        {
          
          "item": "Como ver Netflics en la TV"
        },
        {
         
          "item": "Problemas para iniciar sesión en Netflics"
        },
        {
          
          "item": "Que puedo ver en Netflics"
        },
        {
          
          "item": "Opciones de pago"
        },
        {
          
          "item": "Dispositivos Compatibles"
        }
      ]
      
    }
}
