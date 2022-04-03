import { Injectable } from '@angular/core';
import {Heroes} from './test_heroes';
import {MessageService} from './message.service';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice:MessageService) { }

  getHeroes()  {
    this.messageservice.add("Avengers assembled")
    const heroes = of(Heroes);
    return heroes;
  }
  getHero(id:number) {
    const hero = Heroes.find(i =>i.id === id)
    this.messageservice.add(`Avenger ${id} is ready to be deployed`);
    return of(hero);
  }
}
