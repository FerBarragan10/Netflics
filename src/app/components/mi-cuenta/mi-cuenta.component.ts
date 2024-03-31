import { Component } from '@angular/core';
import { InfoPerfilComponent } from '../../shared/info-perfil/info-perfil.component';
import { DetailAccountComponent } from '../../shared/detail-account/detail-account.component';
import { InfoPlanComponent } from '../../shared/info-plan/info-plan.component';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [InfoPerfilComponent,DetailAccountComponent,InfoPlanComponent],
  templateUrl: './mi-cuenta.component.html',
  styleUrl: './mi-cuenta.component.scss'
})
export class MiCuentaComponent {

}