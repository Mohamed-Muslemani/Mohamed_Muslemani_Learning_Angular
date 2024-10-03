import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
export class ChampionListComponent implements OnInit{
  @Output() championSelected = new EventEmitter<Champions>();

  championList: Champions[] = []
  constructor(private championService: ChampionService) {
  }

  ngOnInit() {
    this.championService.getChampions().subscribe({
      next: (data: Champions[]) => this.championList = data,
      error: err => console.error("Error fetching Champions", err),
      complete:() => console.log("Champion data fetch complete!")
    })
  }

  toggleOPStatus(champion: Champions): void {
    champion.isOP = !champion.isOP;
  }

  selectChampion(champions: Champions) {
    this.championSelected.emit(champions);
  }
}
