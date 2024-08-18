import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IGigItem, IncomingGigItemComponent } from "./incoming-gig-item.component";
import { SharedModule } from "../../../../shared/shared.module";
import { IIncomingGig } from "../incoming-gigs-section.component";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { By } from "@angular/platform-browser";

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
    it("renders header with location", () => {
      const header = fixture.debugElement.query(By.css('h4')).nativeElement as HTMLHeadingElement;
      expect(header.textContent).toBe(mockedGigs.gigItem.when);
    });
    it("renders bands name", () => {
      const bands = fixture.debugElement.queryAll(By.css('span.band'));
      expect(bands.length).toBe(mockedGigs.incomingGig.who.length);

      for (let band of bands) {
        const bandTag = band.nativeElement as HTMLSpanElement;
        expect(mockedGigs.gigItem.who.includes(bandTag.textContent!.trim())).toBeTrue();
      }
    });
    it("renderes address text", () => {
      const address = fixture.debugElement.query(By.css("span.address")).nativeElement as HTMLSpanElement;
      const fullAddresss = `${mockedGigs.gigItem.where.city}, ${mockedGigs.gigItem.where.country}`;
      expect(address.textContent?.trim()).toBe(fullAddresss);
    });
    it("renderes club text", () => {
      const address = fixture.debugElement.query(By.css("span.club")).nativeElement as HTMLSpanElement;
      const fullClubText = `${mockedGigs.gigItem.where.address}, ${mockedGigs.gigItem.where.club}`;
      expect(address.textContent?.trim()).toBe(fullClubText);
    });
  });
  describe('Class tests', () => {
    it("getGig return transformed gig", () => {
      expect(component.getGig!).toEqual(mockedGigs.gigItem);
    });
    it("getAddress returns address with country and city", () => {
      const fullAddress = `${mockedGigs.gigItem.where.city}, ${mockedGigs.gigItem.where.country}`;
      expect(component.getAddress).toBe(fullAddress);
    });
    it("getClub returns full location", () => {
      const fullLocation = `${mockedGigs.gigItem.where.address}, ${mockedGigs.gigItem.where.club}`;
      expect(component.getClub).toBe(fullLocation);
    });
  });
});
