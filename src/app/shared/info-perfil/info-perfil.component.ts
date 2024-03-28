import { Component } from '@angular/core';
import { PerfilesComponent } from '../../components/perfiles/perfiles.component';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-info-perfil',
  standalone: true,
  imports: [PerfilComponent],
  templateUrl: './info-perfil.component.html',
  styleUrl: './info-perfil.component.scss'
})
export class InfoPerfilComponent {
  titulo:string="Perfíles"
  isMyCuenta:boolean=true;
}
