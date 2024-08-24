import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIconsComponent } from './navbar-icons.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { NO_ERRORS_SCHEMA, provideExperimentalZonelessChangeDetection } from "@angular/core";

describe('NavbarIconsComponent', () => {
  let component: NavbarIconsComponent;
  let fixture: ComponentFixture<NavbarIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarIconsComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("DOM tests", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("returns labels for links", () => {
      const links = fixture.debugElement.queryAll(By.css("a")).length;

    });
  });

  describe("Class tests", () => {
    it("returns 4 links", () => {
      const links = component.getIcons;
      expect(links.length).toBe(4);
    });
    it("returns name as IconNamesEnum", () => {
      const links = component.getIcons;

      for (let i = 0; i < links.length; i++) {
        expect(links[i].name).toBe(component.getIcons[i].name);
      }
    });
  });
});
