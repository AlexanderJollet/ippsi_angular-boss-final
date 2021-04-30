import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChoixArmePrincipaleComponent = class ChoixArmePrincipaleComponent {
    constructor(armeService) {
        this.armes = [
            'Arbalette',
            'Sabre laser',
            'Pistolaser',
            'Grenade',
            'Baton',
            'Canon blaster'
        ];
        this._armeService = armeService;
    }
    ngOnInit() {
        const uneObservable = this._armeService.getAll();
        uneObservable.subscribe(lesArmes => console.info(lesArmes));
    }
};
ChoixArmePrincipaleComponent = __decorate([
    Component({
        selector: 'app-choix-arme-principale',
        templateUrl: './choix-arme-principale.component.html',
        styleUrls: ['./choix-arme-principale.component.css']
    })
], ChoixArmePrincipaleComponent);
export { ChoixArmePrincipaleComponent };
//# sourceMappingURL=choix-arme-principale.component.js.map