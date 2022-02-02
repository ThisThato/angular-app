import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];
  selectedHero?: Hero

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(h => this.heroes = h) //Get data asynchronously
  }

  onSelect(value: Hero): void {
    this.selectedHero = value
    console.log(value.name)
  }

}
