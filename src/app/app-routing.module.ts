import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreerPartieComponent } from "./features/creer-partie/creer-partie.component";
import { HomeComponent } from "./features/global/home/home.component";
import { AjouterArmeComponent } from "./features/weapons/ajouter-arme/ajouter-arme.component";
import { ListArmesComponent } from "./features/weapons/list-armes/list-armes.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";


import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'admin', component: HomeComponent },
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
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
