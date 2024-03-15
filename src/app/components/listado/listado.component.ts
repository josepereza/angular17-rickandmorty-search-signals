import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
apiService=inject(ApiService)
}
