import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Arme } from 'src/app/core/models/arme';
let AjouterArmeComponent = class AjouterArmeComponent {
    constructor(armeService, router) {
        this.armeService = armeService;
        this.router = router;
        this.arme = new Arme();
    }
    ngOnInit() {
    }
    clickAjouter() {
        const observable = this.armeService.saveOne(this.arme);
        observable.subscribe(); // (monArmeAjoutee => console.info(monArmeAjoutee));
        this.arme = new Arme();
        this.router.navigate(['/les-armes']);
    }
};
AjouterArmeComponent = __decorate([
    Component({
        selector: 'app-ajouter-arme',
        templateUrl: './ajouter-arme.component.html',
        styleUrls: ['./ajouter-arme.component.css']
    })
], AjouterArmeComponent);
export { AjouterArmeComponent };
//# sourceMappingURL=ajouter-arme.component.js.map