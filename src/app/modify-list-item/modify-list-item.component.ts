import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ChampionService} from "../Services/champion.service";
import {Champions} from "../Shared/Modules/champions";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent implements OnInit{
  championForm: FormGroup;
  champion: Champions | undefined;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private championService: ChampionService,
    private router: Router
  ) {
    this.championForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      class: [''],
      price: [''],
      isOP: [false],
      src: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.championService.getChampionsById(+id).subscribe(champ => {
        if(champ) {
          this.champion = champ;
          this.championForm.patchValue(champ);
        }
      });
    }
  }
  onSubmit(): void {
    const champion: Champions = this.championForm.value;

    if(champion.id) {
      this.championService.updateChampion(champion);
    } else {
      champion.id = this.championService.generateNewId();
      this.championService.addChampion(champion);
    }
    this.router.navigate(['/champions']);
  }

  navigateToChampionList(): void {
    this.router.navigate(['/champions']);
  }
}
