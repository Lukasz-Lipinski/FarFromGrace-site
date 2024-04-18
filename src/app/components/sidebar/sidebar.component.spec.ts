import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SidebarComponent } from "./sidebar.component";

describe("Testing Sidebar Component", () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
   });

   describe("DOM Tests", () => {  });
   describe("Class Tests", () => {
    it("returns number with currency", () => {
      const price = 30;
      const displayedValue = component.getDisplayWidth(price);

      expect(displayedValue).toEqual(`${price}zł`);
     });

    });
 });
