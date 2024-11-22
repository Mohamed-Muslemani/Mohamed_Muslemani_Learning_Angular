import {Component, OnInit} from '@angular/core';
import { Champions } from '../Shared/Modules/champions';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import { ChampionDetailsComponent } from "../champion-details/champion-details.component";
import {ChampionService} from "../Services/champion.service";
import {Router, RouterLink} from "@angular/router";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [ChampionDetailsComponent, NgForOf, RouterLink, NgStyle, NgIf, HoverHighlightDirective],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.scss'
})
export class ChampionListComponent implements OnInit{

  championList: Champions[] = []
  error: string | null = null;
  constructor(
    private championService: ChampionService,
    private router: Router) {
  }

  ngOnInit() {
    this.championService.getChampions().subscribe({
      next: (data: Champions[]) => {
        this.championList = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching champions';
        console.error("Error fetching Champions", err)
      },
      complete:() => console.log("Champion data fetch complete!")
    });
  }

  onDelete(id: number | undefined): void {
    if (id) {
      this.championService.deleteChampion(id).subscribe(() => this.router.navigate(['/champions']));
    }
    this.ngOnInit();
  }

  onEdit(id: number | undefined): void {
    this.router.navigate(['/modify-champion', id]);
  }
}
