import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIconsComponent } from './navbar-icons.component';

describe('NavbarIconsComponent', () => {
  let component: NavbarIconsComponent;
  let fixture: ComponentFixture<NavbarIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarIconsComponent]
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
  });

  describe("Class tests", () => {
    it("returns 4 links", () => {
      const links = component.getIcons;
      expect(links.length).toBe(4);
    });
  })
});
