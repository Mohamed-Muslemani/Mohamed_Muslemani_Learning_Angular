import { Component } from '@angular/core';
import { Champions } from '../Shared/Modules/champions';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import { ChampionDetailsComponent } from "../champion-details/champion-details.component";

@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [ChampionDetailsComponent, NgForOf],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.css'
})
export class ChampionListComponent {
  champion1 : Champions = {name: "Aatrox", title: "the Darkin Blade", class: " Juggernaut", price: 4800, isOP: true};
  champion2 : Champions = {name: "Vel'Koz", title: "the Eye of the Void", class: "Artillery", price: 3141, isOP: false};
  champion3 : Champions = {name: "Kled", title: "the Cantankerous Cavalier", class: "Skirmisher", price: 4800, isOP: false};
  champion4 : Champions = {name: "Ivern", title: "the Green Father", class: "Catcher", price: 4800, isOP: true};
  champion5 : Champions = {name: "Rek'Sai", title: "the Void Burrower", class: "Diver", price: 4800, isOP: true};
  champion6 : Champions = {name: "Riven", title: "the Exile", class: "Skirmisher", price: 4800, isOP: false};
  champion7 : Champions = {name: "Twisted Fate", title: "the Card Master", class: "Burst", price: 4800, isOP: false};
  champion8 : Champions = {name: "Darius", title: "the Hand of Noxus", class: "Juggernaut", price: 450, isOP: true};
  champion9 : Champions = {name: "Jayce", title: "the Defender of Tomorrow", class: "Artillery", price: 4800, isOP: false};
  champion10 : Champions = {name: "Jhin", title: "the Virtuoso", class: "Marksman", price: 4444, isOP: true};

  championList: Champions[] = [this.champion1, this.champion2, this.champion3, this.champion4, this.champion5, this.champion6, this.champion7, this.champion8, this.champion9, this.champion10]

  toggleOPStatus(champion: Champions): void {
    champion.isOP = !champion.isOP;
  }
}
