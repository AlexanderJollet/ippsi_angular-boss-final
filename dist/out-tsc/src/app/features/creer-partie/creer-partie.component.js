import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Player } from '../../core/models/player';
import { randomInt } from 'crypto';
let CreerPartieComponent = class CreerPartieComponent {
    constructor(combattantService, router) {
        this.combattantService = combattantService;
        this.router = router;
        this.Player1 = new Player();
        this.combattants = [];
    }
    ngOnInit() {
        this.combattants = this.combattantService.getAll();
    }
    miser() {
    }
    arreterPartie() {
        this.router.navigate(['']);
    }
    calculerCombat() {
        var Jedi = randomInt(100);
        var Droide = randomInt(100);
        if (Jedi > Droide) {
            {
                {
                    'Le Jedi à gagné face au Droide avec ' + Jedi + ' points contre ' + Droide + 'points pour le Droide';
                }
            }
            return true;
        }
        else {
            {
                {
                    'Le Droide à gagné face au Jedi avec ' + Droide + ' points contre ' + Jedi + 'points pour le Jedi';
                }
            }
            return false;
        }
    }
    resultatCombat() {
        // if(this.calculerCombat()==true && ){
        //}
    }
};
CreerPartieComponent = __decorate([
    Component({
        selector: 'app-creer-partie',
        templateUrl: './creer-partie.component.html',
        styleUrls: ['./creer-partie.component.css']
    })
], CreerPartieComponent);
export { CreerPartieComponent };
//# sourceMappingURL=creer-partie.component.js.map