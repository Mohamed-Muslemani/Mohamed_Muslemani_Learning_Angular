import {Component, Input, OnInit} from '@angular/core';
import { Champions } from '../Shared/Modules/champions';
import {LowerCasePipe, NgIf, NgOptimizedImage, NgStyle, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ChampionService} from "../Services/champion.service";

@Component({
  selector: 'app-champion-details',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, RouterLink, NgIf, UpperCasePipe, TitleCasePipe, LowerCasePipe],
  templateUrl: './champion-details.component.html',
  styleUrl: './champion-details.component.scss'
})
export class ChampionDetailsComponent implements OnInit{
  @Input() champion: Champions | undefined;
  championList: Champions[] = [];
  currentIndex: number = 0;
  error: string|null = null;

  constructor(
    private route: ActivatedRoute,
    private championService: ChampionService,
  ) {}
  ngOnInit(): void {
    this.championService.getChampions().subscribe({
      next: (champs: Champions[]) => {
        this.championList = champs;
        this.error = null;

        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.championList.findIndex(champ => champ.id === id);
            this.champion = this.championList[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching champions';
        console.error('Error fetching champions:', err);
      }
    });
  }
}
