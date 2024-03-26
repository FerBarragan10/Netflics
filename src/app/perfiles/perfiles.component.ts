import { Component } from '@angular/core';
import { PerfilComponent } from '../shared/perfil/perfil.component';

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [PerfilComponent],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.scss'
})
export class PerfilesComponent {

}
