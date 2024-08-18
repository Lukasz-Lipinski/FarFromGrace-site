import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NavbarDesktopComponent } from './navbar-desktop.component';
import { NavbarLogoComponent } from "../../navbar-logo/navbar-logo.component";
import { NavbarIconsComponent } from "../../navbar-icons/navbar-icons.component";
import { SharedModule } from "../../../shared/shared.module";

const mockedLinks = [
  {
    href: "link-test-1",
    label: "link-test-1"
  },
  {
    href: "link-test-2",
    label: "link-test-2"
  },
  {
    href: "link-test-3",
    label: "link-test-3"
  },
  {
    href: "link-test-4",
    label: "link-test-4"
  }
];

describe('NavbarDesktopComponent', () => {
  let component: NavbarDesktopComponent;
  let fixture: ComponentFixture<NavbarDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDesktopComponent],
      imports: [SharedModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarDesktopComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("links", mockedLinks);
    fixture.detectChanges();
  });

  describe("DOM Tests", () => {
    it("renders links", () => {
      const links = fixture.debugElement.queryAll(By.directive(HTMLLinkElement));
      expect(links.length).toEqual(component.getLinks.length);
    });
    it("renders logo component", () => {
      const logo = fixture.debugElement.query(By.directive(NavbarLogoComponent)).nativeElement;

      expect(logo).toBeDefined();
    });
    it("renders icons", () => {
      const icons = fixture.debugElement.queryAll(By.directive(NavbarIconsComponent)).length;
      expect(icons).toEqual(4);

    });
  });
  describe("Class Tests", () => {
    it("returns mocked links", () => {
      expect(component.getLinks.length).toEqual(mockedLinks.length);

      for (let i = 0; i < component.getLinks.length; i++) {
        expect(component.getLinks[i].href).toEqual(mockedLinks[i].href);
        expect(component.getLinks[i].label).toEqual(mockedLinks[i].label);
      }
    });
  });
});
