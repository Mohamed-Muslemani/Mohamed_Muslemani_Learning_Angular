import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes } from "@angular/router";
import {ChampionListComponent} from "./app/champion-list/champion-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ChampionDetailsComponent} from "./app/champion-details/champion-details.component";

const routes: Routes = [
  {path:'', redirectTo: '/champions', pathMatch: 'full'},
  {path: 'champions', component: ChampionListComponent},
  {path: 'champions/:id', component: ChampionDetailsComponent},
  {path: 'modify-champion', component: ModifyListItemComponent},
  {path: 'modify-champion/:id', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => console.log('Bootstrap successful'));
