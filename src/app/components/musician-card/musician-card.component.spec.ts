import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicianCardComponent } from "./musician-card.component";
import { SharedModule } from "../../shared/shared.module";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";

describe('Testing Musician Card Component', () => {
    let component: MusicianCardComponent;
    let fixture: ComponentFixture<MusicianCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MusicianCardComponent],
            imports: [SharedModule],
            providers: [provideExperimentalZonelessChangeDetection()]
        }).compileComponents();
        fixture = TestBed.createComponent(MusicianCardComponent);
        component = fixture.componentInstance;

    });

    describe('DOM tests', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
    describe('Class tests', () => {
        it("", () => {

        });
    });
});