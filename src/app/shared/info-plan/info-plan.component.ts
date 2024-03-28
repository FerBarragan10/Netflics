import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-plan',
  standalone: true,
  imports: [],
  templateUrl: './info-plan.component.html',
  styleUrl: './info-plan.component.scss'
})
export class InfoPlanComponent {

  constructor(private router:Router){
    
  }



navigatePLan(){
  this.router.navigate(['/planes']);
}
}
