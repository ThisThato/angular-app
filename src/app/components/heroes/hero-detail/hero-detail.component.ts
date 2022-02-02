import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../interfaces/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero //Parsed back from the main heroes-component

  constructor() { }

  ngOnInit(): void {
  }

}
