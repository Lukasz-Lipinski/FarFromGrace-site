import {
  ChangeDetectionStrategy,
  Component,
  input,
  computed,
} from "@angular/core";
import { IIncomingGig } from "../incoming-gigs-section.component";
import { IconNamesEnum } from "ngx-bootstrap-icons";

export interface IGigItem extends Omit<IIncomingGig, "when"> {
  when: string;
}

enum DaysDictionary {
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Sat",
}

enum MonthsDictionary {
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
}

@Component({
  selector: "app-incoming-gig-item",
  templateUrl: "./incoming-gig-item.component.html",
  styleUrls: ["./incoming-gig-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomingGigItemComponent {
  readonly setIncomingGig = input.required<IIncomingGig>();
  private gig = computed<IGigItem>(
    () =>
      ({
        ...this.setIncomingGig(),
        when: `${this.setIncomingGig()!.when.getDate()}-${
          MonthsDictionary[this.setIncomingGig()!.when.getMonth()]
        }-${this.setIncomingGig()!.when.getFullYear()}`,
      } as IGigItem)
  );
  get getDay() {
    return this.setIncomingGig().when.getDate();
  }
  get getMonth() {
    return MonthsDictionary[this.setIncomingGig().when.getMonth()];
  }
  get getGig() {
    return this.gig();
  }
  get getCountry() {
    return `${this.gig()?.where.city}, ${this.gig()?.where.country}`;
  }
  get getClub() {
    return this.gig()?.where.club;
  }
  get getAddress() {
    return this.gig()?.where.address;
  }
  get getLocationIcon() {
    return IconNamesEnum.GeoAltFill;
  }
  ticketsButtonLabel = input.required<string>();
  get getTicketsButtonLabel() {
    return this.ticketsButtonLabel();
  }
}
