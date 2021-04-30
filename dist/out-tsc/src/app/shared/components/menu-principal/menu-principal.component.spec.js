import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { MenuPrincipalComponent } from './menu-principal.component';
describe('MenuPrincipalComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [MenuPrincipalComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MenuPrincipalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=menu-principal.component.spec.js.map