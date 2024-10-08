import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes } from "@angular/router";
import {ChampionListComponent} from "./app/champion-list/champion-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/champions', pathMatch: 'full'},
  {path: 'champions', component: ChampionListComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
