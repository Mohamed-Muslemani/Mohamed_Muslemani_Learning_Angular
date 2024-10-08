import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import { ChampionListComponent } from "./champion-list/champion-list.component";
import {ChampionDetailsComponent} from "./champion-details/champion-details.component";
import {ChampionService} from "./Services/champion.service";
import {Champions} from "./Shared/Modules/champions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, NgIf, ChampionListComponent, ChampionDetailsComponent, NgStyle, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Champions';
  selectedChampion: Champions | undefined;
  constructor(private championService: ChampionService) {
  }
  ngOnInit() {
    this.championService.getChampionsById(1).subscribe({
      next: (data: Champions | undefined) => this.selectedChampion = data,
      error: err => console.error("Error fetching Champion", err),
      complete:() => console.log("Champion data fetch complete!")
    })
  }

  onChampionSelected(champion: Champions) {
    this.championService.getChampionsById(champion.id).subscribe({
      next: (data: Champions | undefined) => this.selectedChampion = data,
      error: err => console.error("Error fetching Champion", err),
      complete:() => console.log("Champion data fetch complete!")
    })
  }
}
