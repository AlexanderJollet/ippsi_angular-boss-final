import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/core/models/player';
let PreparerPlayerComponent = class PreparerPlayerComponent {
    constructor() {
        this.monPlayer = new Player();
        this.generationPlayer = new EventEmitter(false);
    }
    ngOnInit() {
    }
    clickButton() {
        // const player = new Player();
        // player.prenom = 'Aque johny';
        this.generationPlayer.emit(this.monPlayer);
        this.monPlayer = new Player();
    }
};
__decorate([
    Output()
], PreparerPlayerComponent.prototype, "generationPlayer", void 0);
PreparerPlayerComponent = __decorate([
    Component({
        selector: 'app-preparer-player',
        templateUrl: './preparer-player.component.html',
        styleUrls: ['./preparer-player.component.css']
    })
], PreparerPlayerComponent);
export { PreparerPlayerComponent };
//# sourceMappingURL=preparer-player.component.js.map