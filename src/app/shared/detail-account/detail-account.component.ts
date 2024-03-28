import { Component } from '@angular/core';
import { InfoPerfilComponent } from '../info-perfil/info-perfil.component';

@Component({
  selector: 'app-detail-account',
  standalone: true,
  imports: [InfoPerfilComponent],
  templateUrl: './detail-account.component.html',
  styleUrl: './detail-account.component.scss'
})
export class DetailAccountComponent {

}
