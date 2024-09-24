import { Component, Input } from '@angular/core';
import { Champions } from '../Shared/Modules/champions';

@Component({
  selector: 'app-champion-details',
  standalone: true,
  imports: [],
  templateUrl: './champion-details.component.html',
  styleUrl: './champion-details.component.css'
})
export class ChampionDetailsComponent {
  @Input() champion?: Champions;
}
