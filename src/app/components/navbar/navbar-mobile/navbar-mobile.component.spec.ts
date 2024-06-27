/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { NavbarMobileComponent } from './navbar-mobile.component';
import { ILink } from "../navbar.component";
import { MatAnchor } from "@angular/material/button";
import { SharedModule } from "../../../shared/shared.module";
import { provideRouter } from "@angular/router";
import { routes } from "../../../app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const mockedLinks: ILink[] = [
  {
    href: "test link 1",
    label: "link 1"
  },
  {
    href: "test link 2",
    label: "link 2"
  },
  {
    href: "test link 3",
    label: "link 3"
  },
];

describe('NavbarMobileComponent', () => {
  let component: NavbarMobileComponent;
  let fixture: ComponentFixture<NavbarMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMobileComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [
        provideRouter(routes)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarMobileComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.links = mockedLinks;
    fixture.detectChanges();

  }));

  describe("DOM tests", () => {
    it("renders 3 mocked links", () => {
      const links = fixture.debugElement.queryAll(By.directive(MatAnchor)).length;
      //added 1 since Home is not mocked
      expect(links).toEqual(mockedLinks.length + 1);
    });
  });
  describe("Class tests", () => {
    it("getLinks returns passed links", () => {
      const links = component.getLinks.length;
      expect(links).toEqual(mockedLinks.length);
    });
    it("trackLink returns special string for added index", () => {
      const index = 1;
      const mockedTrackLink = (i: number) => `${mockedLinks[i].label}-${i}`;

      expect(component.trackLink(index)).toEqual(mockedTrackLink(index));
    });
  });
});
