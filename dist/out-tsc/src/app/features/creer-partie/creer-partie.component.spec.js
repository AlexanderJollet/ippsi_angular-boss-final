import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CreerPartieComponent } from './creer-partie.component';
describe('CreerPartieComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CreerPartieComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CreerPartieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=creer-partie.component.spec.js.map