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
}
