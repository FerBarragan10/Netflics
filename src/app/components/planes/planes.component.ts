import { Component, OnInit } from '@angular/core';
import { PlanComponent } from '../../shared/plan/plan.component';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [PlanComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss'
})
export class PlanesComponent implements OnInit {
  titulo:string="!Cambiaste el plan con éxito!";
  mostrarAlerta:boolean=false;
  ngOnInit(): void {
  }

}
