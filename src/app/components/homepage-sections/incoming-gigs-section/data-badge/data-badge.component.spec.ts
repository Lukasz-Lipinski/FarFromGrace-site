import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataBadgeComponent } from "./data-badge.component";
import { SharedModule } from "../../../../shared/shared.module";
import { By } from "@angular/platform-browser";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";

const verifyElement = (fixture: ComponentFixture<DataBadgeComponent>, index: number, expection: any) => {
    const spanNumber = fixture.debugElement.queryAll(By.css("span"))[index].nativeElement as HTMLSpanElement;
    expect(spanNumber.textContent?.trim()).toBe(expection);
};

describe('Testing DataBadge Component', () => {
    let component: DataBadgeComponent;
    let fixture: ComponentFixture<DataBadgeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DataBadgeComponent],
            imports: [SharedModule],
            providers: [provideExperimentalZonelessChangeDetection()],
        }).compileComponents();
        fixture = TestBed.createComponent(DataBadgeComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("day", 12);
        fixture.componentRef.setInput("month", "Jan");
        fixture.detectChanges();
    });

    describe('DOM tests', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
        it("renders passed number", () => {
            verifyElement(fixture, 0, "12");
        });
        it("renders passed number", () => {
            verifyElement(fixture, 1, "JAN");
        });
    });
    describe('Class tests', () => {
        it("Returns passed day's number", () => {
            expect(component.getDay).toBeInstanceOf(String);
            expect(component.getDay).toBe("12");
        });
        it("Returns passed month", () => {
            expect(component.getMonth).toEqual("Jan");
        });
    });
});