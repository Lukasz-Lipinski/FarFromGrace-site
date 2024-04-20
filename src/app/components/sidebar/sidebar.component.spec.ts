import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IFilterForm, IQueryParamsDetials, SidebarComponent } from "./sidebar.component";
import { ActivatedRoute, provideRouter, Router, RouterModule } from "@angular/router";
import { of } from "rxjs";
import { RouterTestingHarness } from "@angular/router/testing";
import { MerchPageComponent } from "../../pages/merch-page/merch-page.component";
import { SharedModule } from "../../shared/shared.module";
import { FormGroup } from "@angular/forms";
import { IContactForm } from "../contact-from/contact-from.component";

describe("Testing Sidebar Component", () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [RouterModule, SharedModule],
      providers: [
        provideRouter([
          {
            path: "merch",
            component: MerchPageComponent
          },
        ]),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              hat: "hat",
              hoodie: "hoodie",
              maxPrice: "100",
              minPrice: "20",
              sweater: "sweater",
              tshirt: "tshirt"
            } as IQueryParamsDetials)
          },
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe("DOM Tests", () => {
    it("returns ...", () => { });
  });

  describe("Class Tests", () => {
    it("returns number with currency", () => {
      const price = 30;
      const displayedValue = component.getDisplayWidth(price);

      expect(displayedValue).toEqual(`${price}zł`);
    });
    it("getMaxVal returns 1000", () => {
      expect(component.getMaxVal).toEqual(1000);
    });
    it("getMinVal returns 0", () => {
      expect(component.getMinVal).toEqual(0);
    });
    it("sidebarFormGetter returns initially created form", () => {
      const form = component.sidebarFormGetter;
      expect(form).toBeTruthy();
      expect(form).toBeInstanceOf(FormGroup<IFilterForm>);
    });
    it("productsRange returns 4 typed products", () => {
      expect(component.productsRangeGetter.length).toEqual(4);
    });
  });
});
