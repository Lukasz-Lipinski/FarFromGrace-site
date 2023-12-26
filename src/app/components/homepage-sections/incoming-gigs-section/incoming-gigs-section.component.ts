import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface IIncomingGig {
  where: {
    city: string;
    club: string;
    address: string;
  };
  who: string[];
  when: Date;
  link: string;
  start: string;
}

@Component({
  selector: 'app-incoming-gigs-section',
  templateUrl: './incoming-gigs-section.component.html',
  styleUrls: ['./incoming-gigs-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncomingGigsSectionComponent implements OnInit {
  private IncomingGigs: IIncomingGig[] = [
    {
      when: new Date('2024-04-14'),
      link: 'XXXXXXXXXXXXXXXXXXXXXX',
      where: {
        city: 'Warszawa',
        club: 'Progresja',
        address: 'ul.Fort Wola 22, 01-258'
      },
      who: ['After The Burial', 'Far From Grace', 'Shadow of Intent'],
      start: '19:00'
    },
    {
      when: new Date('2024-08-09'),
      link: 'XXXXXXXXXXXXXXXXXXXXXX',
      where: {
        city: 'Derbyshire',
        club: 'Catton Hal',
        address: 'Catton Hall w Walton-on-Trent w Derbyshire'
      },
      who: ['Far From Grace'],
      start: '23:00'
    }
  ];
  public get getIncomingGigs() {
    return this.IncomingGigs;
  };

  constructor() { }

  ngOnInit() {
  }

}
