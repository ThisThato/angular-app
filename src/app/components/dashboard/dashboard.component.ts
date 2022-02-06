import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(h => this.heroes = this.heroes.slice(1, 5))
  }

}
