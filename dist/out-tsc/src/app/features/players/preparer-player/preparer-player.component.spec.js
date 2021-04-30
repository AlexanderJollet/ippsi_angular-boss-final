import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PreparerPlayerComponent } from './preparer-player.component';
describe('PreparerPlayerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PreparerPlayerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PreparerPlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=preparer-player.component.spec.js.map