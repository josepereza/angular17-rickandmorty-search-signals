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
  //personaje = input.required<Personaje>(); // InputSignal<string>

}
