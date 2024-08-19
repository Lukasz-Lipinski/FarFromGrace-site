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
  "Saturday",
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
  readonly setIncomingGig = input.required<IIncomingGig>();
  private gig = computed<IGigItem>(() => ({
    ...this.setIncomingGig(),
    when: `${this.setIncomingGig()!.when.getDate()}-${MonthsDictionary[this.setIncomingGig()!.when.getMonth()]}-${this.setIncomingGig()!.when.getFullYear()}`
  }) as IGigItem
  );
  get getDay() {
    return DaysDictionary[this.setIncomingGig().when.getDay()];
  }
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
