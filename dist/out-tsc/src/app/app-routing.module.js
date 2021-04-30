import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreerPartieComponent } from "./features/creer-partie/creer-partie.component";
import { HomeComponent } from "./features/global/home/home.component";
import { AjouterArmeComponent } from "./features/weapons/ajouter-arme/ajouter-arme.component";
import { ListArmesComponent } from "./features/weapons/list-armes/list-armes.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
const routes = [
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
    { path: '**', component: PageNotFoundComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map