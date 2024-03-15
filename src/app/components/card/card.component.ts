import { Component, Input, input } from '@angular/core';
import { Personaje } from '../../interfaces/iRickandmorty';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true })personaje!:Personaje

  //La de abajo es otra forma de introducir el input mediante una signal
  //en el template habria que imprimirlo como signal: Ej: personaje().image

  //personaje = input.required<Personaje>(); // InputSignal<string>

}
