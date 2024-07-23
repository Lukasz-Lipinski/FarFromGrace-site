import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface IIncomingGig {
  where: {
    city: string;
    club: string;
    address: string;
    country: string;
  };
  who: string[];
  when: Date;
  link: string;
  ticketsLink?: string;
  start: string;
}

@Component({
  selector: 'app-incoming-gigs-section',
  templateUrl: './incoming-gigs-section.component.html',
  styleUrls: ['./incoming-gigs-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncomingGigsSectionComponent {
  public SetIncomingGigs = input<IIncomingGig[]>([]);
  public get getIncomingGigs() {
    return this.SetIncomingGigs();
  };
}
