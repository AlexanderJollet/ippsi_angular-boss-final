import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ArmeService = class ArmeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient.get(environment.apis.armes.url);
    }
    getOne(idArme) {
        return this.httpClient.get(environment.apis.armes.url + '/' + idArme);
    }
    saveOne(arme) {
        return this.httpClient.post(environment.apis.armes.url, arme);
    }
};
ArmeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ArmeService);
export { ArmeService };
//# sourceMappingURL=arme.service.js.map