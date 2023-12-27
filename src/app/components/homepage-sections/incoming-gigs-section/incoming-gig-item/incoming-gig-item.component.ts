import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { IIncomingGig } from '../incoming-gigs-section.component';

interface IGigItem extends Omit<IIncomingGig, "when"> {
  when: string;
}

enum DaysDictionary {
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sutarday",
  "Sunday"
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
export class IncomingGigItemComponent implements OnInit {
  @Input({
    required: true,
  }) set setIncomingGig(val: IIncomingGig) {
    this.gig.set({
      ...val,
      when: `${DaysDictionary[val.when.getDay()]}-${MonthsDictionary[val.when.getMonth()]}-${val.when.getFullYear()}`
    });
  };
  private gig = signal<IGigItem>({
    when: '',
    link: '',
    where: {
      city: '',
      club: '',
      address: '',
      country: '',
    },
    who: [''],
    start: '',
  });
  get getGig() {
    return this.gig();
  }
  get getAddress() {
    return `${this.gig().where.city}, ${this.gig().where.country}`;
  }
  get getClub() {
    return `${this.gig().where.address}, ${this.gig().where.club}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
