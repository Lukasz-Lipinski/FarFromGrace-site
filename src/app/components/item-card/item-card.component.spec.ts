import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCardComponent } from "./item-card.component";
import { SharedModule } from "../../shared/shared.module";

describe('Testing ItemCard Component', () => {
    let component: ItemCardComponent;
    let fixture: ComponentFixture<ItemCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule]

        }).compileComponents();
        fixture = TestBed.createComponent(ItemCardComponent);
        component = fixture.componentInstance;
    });

    describe('DOM tests', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
    describe('Class tests', () => { });
});