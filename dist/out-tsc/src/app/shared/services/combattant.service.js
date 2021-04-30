import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { COMBATTANTS } from 'src/app/core/models/mock-combattant';
let CombattantService = class CombattantService {
    constructor() { }
    getAll() {
        return COMBATTANTS;
    }
};
CombattantService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CombattantService);
export { CombattantService };
//# sourceMappingURL=combattant.service.js.map