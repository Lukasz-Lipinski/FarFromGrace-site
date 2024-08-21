import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IIncomingGig, IncomingGigsSectionComponent } from "./incoming-gigs-section.component";
import { SharedModule } from "../../../shared/shared.module";
import { By } from "@angular/platform-browser";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { IncomingGigItemComponent } from "./incoming-gig-item/incoming-gig-item.component";

const mockGigs: IIncomingGig[] = [
  {
    link: "test-link",
    start: "test-start",
    when: new Date("10-07-2024"),
    where: {
      address: "test-address",
      city: "test-city",
      club: "test-club",
      country: "test-country",
    },
    who: ["testWho"]
  }
];

describe("Testing Incoming Gigs Section Component", () => {
  let component: IncomingGigsSectionComponent;
  let fixture: ComponentFixture<IncomingGigsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomingGigsSectionComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(IncomingGigsSectionComponent);
    component = fixture.componentInstance;
  });

  describe("DOM tests", () => {
    it("should create", () => {
      expect(component).toBeTruthy();
    });
    it("Renders header with text 'Incoming gigs'", () => {
      const mockTitle = "Incoming gigs";
      const header = fixture.debugElement.query(By.css("h2")).nativeElement as HTMLHeadingElement;
      expect(header.textContent?.trim()).toEqual(mockTitle.toUpperCase());
    });
    it("Renders mocked elements", () => {
      fixture.componentRef.setInput("SetIncomingGigs", mockGigs);
      fixture.detectChanges();

      const incomingGigsElements = fixture.debugElement.queryAll(By.directive(IncomingGigItemComponent));

      expect(incomingGigsElements.length).toBe(1);
    });
  });
  describe("Class tests", () => {
    it("GetIncomingGigs return empty array by default", () => {
      expect(component.getIncomingGigs).toEqual([]);
    });
    it("GetIncomingGigs return passed value", () => {
      fixture.componentRef.setInput("SetIncomingGigs", mockGigs);

      expect(component.getIncomingGigs).toEqual(mockGigs);
      expect(component.getIncomingGigs.length).toBe(mockGigs.length);
    });
  });
});