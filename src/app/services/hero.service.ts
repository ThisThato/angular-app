import { Injectable } from '@angular/core';
import { Hero } from "../interfaces/Hero";
import { Heroes } from '../data/mock-heroes';
import { Observable, of } from 'rxjs'; //Async data fetching/operations
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) //Service in service injection
  { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: fetched heroes') //Parsed back to the MessageService
    return heroes;
  }
}
