import { Injectable } from '@angular/core';
import {Champions} from "../Shared/Modules/champions";
import {championList} from "../Shared/data/mockChampion.data";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private apiUrl = 'api/champions'
  private champions: Champions[] = championList

  constructor(private http: HttpClient) { }

  getChampions(): Observable<Champions[]>{
    return this.http.get<Champions[]>(this.apiUrl);
  }

  getChampionsById(championId: number): Observable<Champions> {
    return this.http.get<Champions>(`${this.apiUrl}/${championId}`);
  }

  addChampion(newChampion:Champions) : Observable<Champions>{
    return this.http.post<Champions>(this.apiUrl, newChampion);
  }

  updateChampion(updatedChampion: Champions): Observable<Champions> {
    const url = `${this.apiUrl}/${updatedChampion.id}`;
    return this.http.put<Champions>(url, updatedChampion);
  }

  deleteChampion(championId: number): Observable<{}> {
    const url = `${this.apiUrl}/${championId}`;
    return this.http.delete(url);
  }

  generateNewId(): number {
    return this.champions.length > 0 ? Math.max(...this.champions.map(champ => champ.id)) + 1 : 1;
  }
}
