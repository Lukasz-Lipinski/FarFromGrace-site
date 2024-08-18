import { ComponentFixture, DeferBlockBehavior, DeferBlockFixture, DeferBlockState, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { SharedModule } from '../../shared/shared.module';
import { By } from '@angular/platform-browser';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NO_ERRORS_SCHEMA, provideExperimentalZonelessChangeDetection } from "@angular/core";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let deferBlocks: DeferBlockFixture[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()],
      deferBlockBehavior: DeferBlockBehavior.Manual,
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    deferBlocks = await fixture.getDeferBlocks();
    fixture.componentRef.setInput("pageisReadyToDisplay", true);
    fixture.detectChanges();
  });

  describe("DOM tests", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("Returns layout with sidebar if props equals true", async () => {
      fixture.componentRef.setInput("isSidebar", true);
      await deferBlocks[0].render(DeferBlockState.Complete);
    });
    it("Returns layout without sidebar", () => {
      const sidebar = fixture.debugElement.query(By.directive(SidebarComponent))?.nativeElement;

      expect(sidebar).toBeUndefined();

    });
  });
  describe("Class tests", () => {
    it("Return true if to input was passed true", () => {
      fixture.componentRef.setInput("isSidebar", true);
      expect(component.getIsSidebar).toBeTrue();
    });
    it("Returns false by default", () => {
      expect(component.getIsSidebar).toBeFalse();
    });
  });
});
