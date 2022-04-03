import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service'
import {MessageService} from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

// hero:Hero= {
//   id:1,
//   name:"Toxin"
// };
constructor(private messageservice:MessageService,private heroservice:HeroService) {}

heroes:Hero[] = [];
// selectedhero;
// select(hero) {
//   this.selectedhero = hero;
//   this.messageservice.add(`${hero.name} is ready to be deployed`);

// }
getHero() :void{
  this.heroservice.getHeroes().subscribe(i => this.heroes = i);
}

  

  ngOnInit(): void {
    this.getHero();
  }

}
