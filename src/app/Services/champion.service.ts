import { Injectable } from '@angular/core';
import {Champions} from "../Shared/Modules/champions";
import {championList} from "../Shared/data/mockChampion.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private champions: Champions[] = championList

  constructor() { }

  getChampions(): Observable<Champions[]>{
    return of(this.champions);
  }

  getChampionsById(championId: number): Observable<Champions | undefined> {
    return of(this.champions.find(champ => champ.id === championId));
  }

  addChampion(newChampion:Champions) : Observable<Champions>{
    this.champions.push(newChampion);
    return of(newChampion);
  }

  updateChampion(updatedChampion: Champions): Observable<Champions | undefined> {
    const index = this.champions.findIndex(champ => champ.id === updatedChampion.id);
    if (index > -1) {
      this.champions[index] = updatedChampion;
      return of(updatedChampion);
    }
    return of(undefined);
  }

  deleteChampion(championId: number): void {
    this.champions = this.champions.filter(champ => champ.id !== championId);
  }

  generateNewId(): number {
    return this.champions.length > 0 ? Math.max(...this.champions.map(champ => champ.id)) + 1 : 1;
  }
}
