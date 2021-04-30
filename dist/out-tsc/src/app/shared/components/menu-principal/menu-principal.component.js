import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let MenuPrincipalComponent = class MenuPrincipalComponent {
    constructor() {
        this.logoActive = new EventEmitter(false);
    }
    ngOnInit() {
        this.logoActive.emit(2);
    }
    clickSurLogo() {
        console.info('je click sur le a href');
        this.logoActive.emit(1);
    }
};
__decorate([
    Input()
], MenuPrincipalComponent.prototype, "titre", void 0);
__decorate([
    Output()
], MenuPrincipalComponent.prototype, "logoActive", void 0);
MenuPrincipalComponent = __decorate([
    Component({
        selector: 'app-menu-principal',
        templateUrl: './menu-principal.component.html',
        styleUrls: ['./menu-principal.component.css']
    })
], MenuPrincipalComponent);
export { MenuPrincipalComponent };
//# sourceMappingURL=menu-principal.component.js.map