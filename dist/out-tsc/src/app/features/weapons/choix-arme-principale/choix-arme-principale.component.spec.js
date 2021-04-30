import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ChoixArmePrincipaleComponent } from './choix-arme-principale.component';
describe('ChoixArmePrincipaleComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ChoixArmePrincipaleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChoixArmePrincipaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=choix-arme-principale.component.spec.js.map