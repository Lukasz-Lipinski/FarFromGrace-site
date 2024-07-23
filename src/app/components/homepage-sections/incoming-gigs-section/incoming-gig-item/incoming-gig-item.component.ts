import { ChangeDetectionStrategy, Component, input, computed } from '@angular/core';
import { IIncomingGig } from '../incoming-gigs-section.component';

export interface IGigItem extends Omit<IIncomingGig, "when"> {
  when: string;
}

enum DaysDictionary {
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sutarday",
};

enum MonthsDictionary {
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
}

@Component({
  selector: 'app-incoming-gig-item',
  templateUrl: './incoming-gig-item.component.html',
  styleUrls: ['./incoming-gig-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncomingGigItemComponent {
  readonly setIncomingGig = input.required<IIncomingGig | undefined>();
  private gig = computed<IGigItem | undefined>(() =>
    this.setIncomingGig() ? {
      ...this.setIncomingGig(),
      when: `${DaysDictionary[this.setIncomingGig()!.when.getDay()]}-${MonthsDictionary[this.setIncomingGig()!.when.getMonth()]}-${this.setIncomingGig()!.when.getFullYear()}`
    } as IGigItem
      : undefined
  );
  get getGig() {
    return this.gig();
  }
  get getAddress() {
    return `${this.gig()?.where.city}, ${this.gig()?.where.country}`;
  }
  get getClub() {
    return `${this.gig()?.where.address}, ${this.gig()?.where.club}`;
  }

}
