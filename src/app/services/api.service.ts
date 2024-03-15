import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Personaje, Personajes } from '../interfaces/iRickandmorty';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiData = ['jar', 'jaw', 'hip', 'hop'];
  constructor() {}
  http = inject(HttpClient);
  personajes$ = signal<Personaje[]>([]);

  searchQuery = signal<string | null>('rick');

 
  listFiltered= computed(()=>{
     const filter=this.searchQuery();
     
    this.http
    .get<Personajes>(
      `https://rickandmortyapi.com/api/character/?name=${filter}&status=alive`
    )
    .subscribe((data) => {
      this.personajes$.set(data.results);
    });
    return this.personajes$();
  })
  

  // personajes = this.personajes$.asReadonly();
}