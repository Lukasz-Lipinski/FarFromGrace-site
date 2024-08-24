/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogoComponent } from './navbar-logo.component';
import { By } from '@angular/platform-browser';
import { provideRouter, Router, RouterModule } from '@angular/router';
import { routes } from "../../app.routes";
import { NO_ERRORS_SCHEMA, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";

describe('NavbarLogoComponent', () => {
  let component: NavbarLogoComponent;
  let fixture: ComponentFixture<NavbarLogoComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLogoComponent],
      imports: [SharedModule],
      providers: [
        provideRouter(routes),
        provideExperimentalZonelessChangeDetection()
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarLogoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe("Class tests", () => {
    it("should get url link", () => {
      expect(component.getUrl).toMatch("navbar-logo.svg");
    });
  });
  describe("DOM tests", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it("should render link and img", () => {
      const link = fixture.debugElement.query(By.css("a")).nativeElement as HTMLLinkElement;
      const img = link.querySelector("img");
      expect(link.getAttribute("routerLink")).toEqual('/');
      expect(img).toBeDefined();
      expect(img?.src).toContain("navbar-logo.svg");
    });

    it("Should invoked router if img was clicked", () => {
      const mockedUrl = "/test-url";

      const link = fixture.debugElement.query(By.css("a")).nativeElement as HTMLLinkElement;
      link.setAttribute("routerLink", mockedUrl);
      link.click();

      fixture.detectChanges();

      expect(link.getAttribute("routerLink")).toEqual(mockedUrl);
      fixture.whenStable().then(() => {
        expect(router.navigated).toBeTrue();
        expect(window.location.pathname).toMatch(mockedUrl);
      });
    });

    it("stop propagination is being invoked using onClick", () => {
      const mouseEvent = new MouseEvent("click");
      const spyOnMouseEvent = spyOn(mouseEvent, "stopPropagation");

      component.onClick(mouseEvent);
      expect(spyOnMouseEvent).toHaveBeenCalled();
    });
  });
});
