import { Component, OnInit } from '@angular/core';
import { PlanComponent } from '../../shared/plan/plan.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [PlanComponent,NavbarComponent,FooterComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss'
})
export class PlanesComponent implements OnInit {
  titulo:string="!Cambiaste el plan con éxito!";
  mostrarAlerta:boolean=false;
  ngOnInit(): void {
  }

}
