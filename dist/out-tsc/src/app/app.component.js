import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(armeService) {
        this.armeService = armeService;
        this.title1 = 'Mon jeu Star wars';
        this.actionBoutonLibelle = 'Cacher';
        this.afficherImage = true;
        this.armesSecondaires = [];
    }
    ngOnInit() {
        // this.armesSecondaires.push(
        //   { id: 1, libelle: 'Arbalette', option: '' },
        //   { id: 2, libelle: 'Sabre laser' }
        // );
        const observable = this.armeService.getAll();
        observable.subscribe(armes => {
            this.armesSecondaires = armes;
        });
    }
    afficherCacherImage() {
        //this.afficherImage = false;
        // if (this.afficherImage == true) {
        //   this.afficherImage = false;
        // } else {
        //   this.afficherImage = true;
        // }
        // if (this.afficherImage) {
        //   this.afficherImage = false;
        // } else {
        //   this.afficherImage = true;
        // }
        this.afficherImage = !this.afficherImage;
        //if (this.afficherImage == true) {
        // if (this.afficherImage) {
        //   this.actionBoutonLibelle = 'Cacher';
        // } else {
        //   this.actionBoutonLibelle = 'Afficher';
        // }
        this.actionBoutonLibelle = 'Afficher';
        if (this.afficherImage) {
            this.actionBoutonLibelle = 'Cacher';
        }
        this.actionBoutonLibelle = this.afficherImage ? 'Cacher' : 'Afficher';
    }
    leLogoAEteActive(valeur) {
        console.info('ici, ', valeur);
    }
    recupererPlayer(player) {
        console.info(player);
        // c'est ici qu'on va appeler le service playerService
        // this.playerService.saveOne(player);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map