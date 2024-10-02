import { Component } from '@angular/core';
import { Champions } from '../Shared/Modules/champions';
import {NgForOf} from "@angular/common";
import { ChampionDetailsComponent } from "../champion-details/champion-details.component";
import {ChampionService} from "../Services/champion.service";

@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [ChampionDetailsComponent, NgForOf],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.css'
})
export class ChampionListComponent {
  constructor(private championService: ChampionService) {
  }
  toggleOPStatus(champion: Champions): void {
    champion.isOP = !champion.isOP;
  }
}
