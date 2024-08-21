import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IGigItem, IncomingGigItemComponent } from "./incoming-gig-item.component";
import { SharedModule } from "../../../../shared/shared.module";
import { IIncomingGig } from "../incoming-gigs-section.component";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { By } from "@angular/platform-browser";
import { DataBadgeComponent } from "../data-badge/data-badge.component";

// mocks
const mockedGigs: {
  incomingGig: IIncomingGig,
  gigItem: IGigItem;
} = {
  incomingGig: {
    link: 'test gig link',
    start: '20:00',
    when: new Date("2024-07-10"),
    where: {
      address: 'test address',
      city: "test city",
      club: "test club",
      country: "test country"
    },
    who: [
      "test band 1",
      "test band 2",
      "test band 3"
    ],
    ticketsLink: "test ticket link "
  },
  gigItem: {
    link: 'test gig link',
    start: '20:00',
    when: "Wednesday-July-2024",
    where: {
      address: 'test address',
      city: "test city",
      club: "test club",
      country: "test country"
    },
    who: [
      "test band 1",
      "test band 2",
      "test band 3"
    ],
    ticketsLink: "test ticket link "
  }
};

describe('Testing IncomingGiGItem Component', () => {
  let component: IncomingGigItemComponent;
  let fixture: ComponentFixture<IncomingGigItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomingGigItemComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomingGigItemComponent);
    fixture.componentRef.setInput('setIncomingGig', mockedGigs.incomingGig);
    component = fixture.componentInstance;
    fixture.changeDetectorRef.markForCheck();
  });

  describe('DOM tests', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('setIncomingGig', mockedGigs.incomingGig);
      fixture.detectChanges();
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("renders component with date of event", () => {
      const dateComponent = fixture.debugElement.query(By.directive(DataBadgeComponent)).nativeElement as HTMLHeadingElement;
      expect(dateComponent.textContent).toContain(component.getDay);
      expect(dateComponent.textContent).toContain(component.getMonth.toUpperCase());
    });
    it("renders bands name", () => {
      const bands = fixture.debugElement.queryAll(By.css('span.band'));
      expect(bands.length).toBe(mockedGigs.incomingGig.who.length);

      for (let i = 0; i < bands.length; i++) {
        const bandTag = bands[i].nativeElement as HTMLSpanElement;
        expect(bandTag.textContent!).toContain(mockedGigs.gigItem.who[i].toUpperCase());
      }
    });
    it("renderes address text", () => {
      const address = fixture.debugElement.query(By.css("span.address")).nativeElement as HTMLSpanElement;
      expect(address?.textContent).toContain(component.getAddress);
    });
    it("renderes club text", () => {
      const address = fixture.debugElement.query(By.css("span.club")).nativeElement as HTMLSpanElement;
      expect(address?.textContent).toContain(mockedGigs.gigItem.where.club);
    });
  });
  describe('Class tests', () => {
    it("getGig return transformed gig", () => {
      expect(component.getGig!.when).toBe("10-Jul-2024");
    });
    it("getAddress returns address with country and city", () => {
      expect(component.getAddress).toBe(mockedGigs.gigItem.where.address);
    });
    it("getClub returns full location", () => {
      expect(component.getClub).toBe(mockedGigs.gigItem.where.club);
    });
  });
});
