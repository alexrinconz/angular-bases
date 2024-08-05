import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesList:string[] = ["Spiderman", "Ironman", "Captain America", "Hulk", "Thor"];
  public deletedHero?:string = "";

  removeLastHero() {
    this.deletedHero = this.heroesList.pop();
  }
}
