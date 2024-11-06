import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes } from "@angular/router";
import {ChampionListComponent} from "./app/champion-list/champion-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ChampionDetailsComponent} from "./app/champion-details/champion-details.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";

const routes: Routes = [
  {path:'', redirectTo: '/champion', pathMatch: 'full'},
  {path: 'champions', component: ChampionListComponent},
  {path: 'champions/:id', component: ChampionDetailsComponent},
  {path: 'modify-champion', component: ModifyListItemComponent},
  {path: 'modify-champion/:id', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 0}))
  ],

}).catch((err) => console.log(err));
