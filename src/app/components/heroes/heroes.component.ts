import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero';
import { Heroes } from '../../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  //#region ... Properties ...

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  heroes: Array<Hero> = Heroes

  //heroes: Array<Hero> = [{ id: 2, name: 'Thanos' }, { id: 3, name: 'Hatter' }]
  //#endregion  ... Properties ...

  constructor() { }

  ngOnInit(): void {
  }

}
