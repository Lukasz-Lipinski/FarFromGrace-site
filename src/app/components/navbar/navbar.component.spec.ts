import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../../shared/shared.module';
import { By } from "@angular/platform-browser";
import { NavbarDesktopComponent } from "./navbar-desktop/navbar-desktop.component";
import { personX, router } from "ngx-bootstrap-icons";
import { NavbarMobileComponent } from "./navbar-mobile/navbar-mobile.component";
import { provideRouter } from "@angular/router";
import { routes } from "../../app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [
        provideRouter(routes)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Class tests", () => {
    it("returns 3 links", () => {
      expect(component.getLinks.length).toEqual(3);
    });
  });
});
