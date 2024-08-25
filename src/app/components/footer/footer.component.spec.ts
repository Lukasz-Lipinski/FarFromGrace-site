import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { SharedModule } from "../../shared/shared.module";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { By } from "@angular/platform-browser";
import { NavbarIconsComponent } from "../navbar-icons/navbar-icons.component";

describe("Testing Footer Component", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe("DOM tests", () => {
    it("should create", () => {
      expect(component).toBeTruthy();
    });
    it("renders icons", () => {
      const icons = fixture.debugElement.query(
        By.directive(NavbarIconsComponent)
      ).nativeElement;

      expect(icons).toBeDefined();
    });
    it("renders information about rights", () => {
      const emElement = fixture.debugElement.query(By.css("em"))
        .nativeElement as HTMLElement;

      expect(emElement).toBeDefined();
      expect(emElement.textContent).toContain(
        "Far From Grace. All Rights Reserved."
      );
    });
  });
});
