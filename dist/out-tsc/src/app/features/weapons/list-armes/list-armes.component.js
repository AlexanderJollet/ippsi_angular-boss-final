import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListArmesComponent = class ListArmesComponent {
    constructor(armeService) {
        this.armeService = armeService;
        this.armes = [];
    }
    ngOnInit() {
        const observable = this.armeService.getAll();
        observable.subscribe(armes => {
            this.armes = armes;
        });
    }
};
ListArmesComponent = __decorate([
    Component({
        selector: 'app-list-armes',
        templateUrl: './list-armes.component.html',
        styleUrls: ['./list-armes.component.css']
    })
], ListArmesComponent);
export { ListArmesComponent };
//# sourceMappingURL=list-armes.component.js.map