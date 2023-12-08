import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { SharedModule } from '../../shared/shared.module';
import { By } from '@angular/platform-browser';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("DOM tests", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("Returns layout with sidebar if props equals true", () => {
      component.isSidebar = true;
      fixture.detectChanges();

      setTimeout(() => {
        const sidebar = fixture.debugElement.query(By.directive(SidebarComponent)).nativeElement;

        expect(sidebar).toBeDefined();
      });
     })
     it("Returns layout without sidebar", () => {
      const sidebar = fixture.debugElement.query(By.directive(SidebarComponent))?.nativeElement;

      expect(sidebar).toBeUndefined();

      })
   });
  describe("Class tests", () => {
    it("Return true if to input was passed true", () => {
      component.isSidebar = true;

      expect(component.isSidebar).toBeTrue();
     })
     it("Return false defaultly", () => {
      expect(component.isSidebar).toBeFalse();
      })
  })
});
