import {Component, OnInit} from '@angular/core';
import { Champions } from '../Shared/Modules/champions';
import {NgForOf, NgStyle} from "@angular/common";
import { ChampionDetailsComponent } from "../champion-details/champion-details.component";
import {ChampionService} from "../Services/champion.service";
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [ChampionDetailsComponent, NgForOf, RouterLink, NgStyle],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.scss'
})
export class ChampionListComponent implements OnInit{

  championList: Champions[] = []
  constructor(
    private championService: ChampionService,
    private router: Router) {
  }

  ngOnInit() {
    this.championService.getChampions().subscribe({
      next: (data: Champions[]) => this.championList = data,
      error: err => console.error("Error fetching Champions", err),
      complete:() => console.log("Champion data fetch complete!")
    })
  }

  onDelete(id: number): void {
    if (id) {
      this.championService.deleteChampion(id);
    }
    this.ngOnInit();
  }

  // onEdit() {
  //   this.router.navigate(['/modify-champion']);
  // }
}
