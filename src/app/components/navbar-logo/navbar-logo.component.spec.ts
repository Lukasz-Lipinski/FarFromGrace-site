/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { NavbarLogoComponent } from './navbar-logo.component';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

describe('NavbarLogoComponent', () => {
  let component: NavbarLogoComponent;
  let fixture: ComponentFixture<NavbarLogoComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NavbarLogoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NavbarLogoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe("Class tests", () => {
    it("should get url link", () => {
      expect(component.getUrl).toBe("/");
     })
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
      expect(img?.srcset).toEqual(component.getUrl);
     })

     it("Should invoked router if img was clicked", () => {
      const link = fixture.debugElement.query(By.css("a")).nativeElement as HTMLLinkElement;
      const spyOnRouter = spyOn(router, "navigate");

      link.click();

      expect(spyOnRouter).toHaveBeenCalled();
      })
   });
});
