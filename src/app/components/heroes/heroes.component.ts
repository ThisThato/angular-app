import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];
  selectedHero?: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(h => this.heroes = h) //Get data asynchronously
  }

  onSelect(value: Hero): void {
    this.selectedHero = value
    this.messageService.add(`HeroesComponent: Selected Hero - ${value.id}`) //Parsing hero data to a different component
    console.log(value.name)
  }

}
