import { Injectable } from '@angular/core';
import {Champions} from "../Shared/Modules/champions";
import {championList} from "../Shared/data/mockChampion.data";
import {Observable, catchError, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private apiUrl = 'api/champions'
  private champions: Champions[] = championList

  constructor(private http: HttpClient) { }

  getChampions(): Observable<Champions[]>{
    return this.http.get<Champions[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getChampionsById(championId: number): Observable<Champions> {
    return this.http.get<Champions>(`${this.apiUrl}/${championId}`).pipe(catchError(this.handleError));
  }

  addChampion(newChampion:Champions) : Observable<Champions>{
    return this.http.post<Champions>(this.apiUrl, newChampion).pipe(catchError(this.handleError));
  }

  updateChampion(updatedChampion: Champions): Observable<Champions> {
    const url = `${this.apiUrl}/${updatedChampion.id}`;
    return this.http.put<Champions>(url, updatedChampion).pipe(catchError(this.handleError));
  }

  deleteChampion(championId: number): Observable<{}> {
    const url = `${this.apiUrl}/${championId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
    return this.champions.length > 0 ? Math.max(...this.champions.map(champ => champ.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
