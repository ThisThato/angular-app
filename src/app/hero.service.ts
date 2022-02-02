import { Injectable } from '@angular/core';
import { Hero } from "./interfaces/Hero";
import { Heroes } from './data/mock-heroes';
import { Observable, of } from 'rxjs'; //Async data fetching/operations


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    return heroes;
  }
}
