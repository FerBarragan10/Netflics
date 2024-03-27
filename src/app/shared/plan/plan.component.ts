import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [PopUpComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent implements OnInit {
  planes:any[]=[];
  titulo:string="¡Cambiaste el plan con éxito!";
  mostrarAlerta:boolean=false;
  ngOnInit(): void {
      this.crearArrayplanes();

  }
  comprarPlan(){
    this.mostrarAlerta=true;
  }


  crearArrayplanes(){
  // @ts-ignore
   this.planes = [
      {
        "titulo": "Plan Single",
        "item1": "1 pantalla ",
        "item2": "Buena calidad de video en Hd(720)",
        "precio": "$1000"
      },
      {
        "titulo": "Plan Duo",
        "item1": "2 pantallas",
        "item2": "Excelente calidad de video en Full HD(1080)",
        "precio": "$1800"
      },
      {
        "titulo": "Plan Cuarteto",
        "item1": "4 pantallas",
        "item2": "Excelente calidad de video en full HD(1080)",
        "precio": "$2400"
      },
      {
        "titulo": "Plan Familiar",
        "item1": "6 pantallas",
        "item2": "Excelente calidad de video en full HD(1080)",
        "precio": "$3000"
      }
    ]
    
  }

}
