import {Component, Input, OnInit} from '@angular/core';
import { Champions } from '../Shared/Modules/champions';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ChampionService} from "../Services/champion.service";

@Component({
  selector: 'app-champion-details',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, RouterLink],
  templateUrl: './champion-details.component.html',
  styleUrl: './champion-details.component.scss'
})
export class ChampionDetailsComponent implements OnInit{
  @Input() champion: Champions | undefined;
  championList: Champions[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private championService: ChampionService,
  ) {}
  ngOnInit(): void {
    this.championService.getChampions().subscribe(champs => {
      this.championList = champs;

      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.championList.findIndex(champ => champ.id === id);
          this.champion = this.championList[this.currentIndex];
        }
      });
    });
  }
}
