import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreerPartieComponent } from "./features/creer-partie/creer-partie.component";
import { ListPartyComponent } from "./features/game/list-party/list-party/list-party.component";
import { HomeComponent } from "./features/global/home/home.component";
import { AjouterArmeComponent } from "./features/weapons/ajouter-arme/ajouter-arme.component";
import { ListArmesComponent } from "./features/weapons/list-armes/list-armes.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nouvelle-arme',
    component: AjouterArmeComponent
  },
  {
    path: 'les-armes',
    component: ListArmesComponent
  },
  {
    path: 'nouvelle-partie',
    component: CreerPartieComponent
  },
  {
    path: 'liste-partie',
    component: ListPartyComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
