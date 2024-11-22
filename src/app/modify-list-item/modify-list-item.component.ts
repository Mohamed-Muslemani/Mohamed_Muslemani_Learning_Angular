import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ChampionService} from "../Services/champion.service";
import {Champions} from "../Shared/Modules/champions";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent implements OnInit{
  championForm: FormGroup;
  champion: Champions | undefined;
  error: string | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private championService: ChampionService,
    private router: Router
  ) {
    this.championForm = this.fb.group({
      id: ['', Validators.min(0)],
      name: ['', Validators.required],
      title: ['', Validators.required],
      class: ['Fighter', Validators.pattern(/^[A-Z, a-z]*$/)],
      price: [4800, Validators.max(7300)],
      isOP: [false],
      src: ['images/Jayce.webp']
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.championService.getChampionsById(id).subscribe( {
        next: champ => {
          if(champ) {
            this.championForm.patchValue(champ);
          }
        },
        error: err => {
          this.error = 'Error fetching champions';
          console.error('Error fetching champion:', err);
        }
      });
    }
  }
  onSubmit(): void {
    if (this.championForm.valid) {
      const champion: Champions = this.championForm.value;
      if(champion.id) {
        this.championService.updateChampion(champion).subscribe(() =>
        this.router.navigate(['/champions']));
      } else {
        this.championService.addChampion(champion).subscribe(() => this.router.navigate(['/champions']));
      }
    }
  }
  navigateToChampionList(): void {
    this.router.navigate(['/champions']);
  }
}
