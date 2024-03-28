import { Component, Input } from '@angular/core';
import { PerfilComponent } from '../../shared/perfil/perfil.component';

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [PerfilComponent],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.scss'
})
export class PerfilesComponent {
  @Input() titulo!: string;
  tituloPerfil:string="Identificación por favor"
  isMyCuenta:boolean=false;

}
