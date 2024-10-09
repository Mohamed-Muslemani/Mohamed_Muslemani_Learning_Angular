import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import { ChampionListComponent } from "./champion-list/champion-list.component";
import {ChampionDetailsComponent} from "./champion-details/champion-details.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, NgIf, ChampionListComponent, ChampionDetailsComponent, NgStyle, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Champions';
}
