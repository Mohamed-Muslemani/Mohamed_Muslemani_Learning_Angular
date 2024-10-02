import { Injectable } from '@angular/core';
import {Champions} from "../Shared/Modules/champions";
import {championList} from "../Shared/mockChampion.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private champions: Champions[] = championList

  constructor() { }

  getChampions(): Observable<Champions[]>{
    return of(championList);
  }

  getChampionsById(championId: number): Observable<Champions | undefined> {
    const champion = this.champions.find(champ => champ.id === championId);
    return of(champion);
  }

  addChampion(newChampion:Champions) : Observable<Champions[]>{
    this.champions.push(newChampion)
    return of(this.champions);
  }

  updateChampion(updatedChampion: Champions): Observable<Champions[]> {
    const index = this.champions.findIndex(champ => champ.id === updatedChampion.id);
    if (index !== -1) {
      this.champions[index] = updatedChampion;
    }
    return of(this.champions);
  }

  deleteChampion(championId: number): Observable<Champions[]> {
    this.champions = this.champions.filter(champ => champ.id !== championId);
    return of(this.champions);
  }
}
