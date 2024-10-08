import { Component, Input } from '@angular/core';
import { Champions } from '../Shared/Modules/champions';
import {NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-champion-details',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage],
  templateUrl: './champion-details.component.html',
  styleUrl: './champion-details.component.css'
})
export class ChampionDetailsComponent {
  @Input() champion?: Champions;
  @Input() backgroundColor?: String;
}
