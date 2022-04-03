import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from '../hero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  

  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}
hero :Hero |undefined;
  gethero() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(i =>this.hero = i)
  }
  goback() {
    this.location.back();
  }
  ngOnInit(): void {
    this.gethero()
  }

}
