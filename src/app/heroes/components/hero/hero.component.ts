import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name:string = "ironman";
  age:number = 45;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = "spiderman";
  }

  changeAge():void {
    this.age = 27;
  }

  resetForm():void {
    this.name = "ironman";
    this.age = 45;
  }
}
