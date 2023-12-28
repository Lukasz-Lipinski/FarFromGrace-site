import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, delay, map, of, tap, } from 'rxjs';
import { IIncomingGig } from '../../../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component';

export type Role = "Bassist" | "Guitarist" | "Drummer" | "Vocalist/Guitarist";

export interface IEquipmentItem {
  header: "Guitars" | "Drums" | "Amps" | "Basses" | "Amp Modelers" | "Shellset";
  list: string[];
}

export interface IMusican {
  name: string;
  nick: string;
  surname: string;
  role: Role;
  imgMain: string;
  imgAvatar: string;
  imgPosition: "left" | "right";
  description: string[];
  equpiment: IEquipmentItem[];
}

interface IHomepageBackendData<T> {
  gigs: T[];
  news: string[];
}

interface IBackendData<T> {
  pl: T | undefined;
  eng: T | undefined;
}

interface IIncomingGigFromBackend extends Omit<IIncomingGig, "when"> {
  when: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private http = inject(HttpClient);
  private backendData = signal<IMusican[]>([
    {
      name: "Łukasz",
      nick: "Wookie",
      surname: "Lipiński",
      role: 'Vocalist/Guitarist',
      description: [
        "The best growler in the World! His guttural sounds as deepest helish fart!",
        "Always annoyed guy that often has a problem with something!",
        "He plays on the rythm guitar and is one of FFG founders!"
      ],
      imgMain: "assets/about/wookie-main.jpg",
      imgAvatar: "assets/about/wookie-avatar.jpg",
      imgPosition: 'left',
      equpiment: [
        {
          header: "Guitars",
          list: [
            "Solar V1.6 BOP Artist LTD Evertune",
            "Ibanez RG 7421 White"
          ]
        },
        {
          header: "Amp Modelers",
          list: [
            "Helix Stomp",
            "Sinxmix simulations"
          ]
        }
      ]
    },
    {
      name: "Jasiek",
      nick: "Januszek",
      surname: "Pieszczoch",
      role: 'Guitarist',
      description: [
        "Extra the best guitarist in the World! He is fan of tapping and leads lines!.",
        "A technical brain of FFG and is one of FFG founders as Wookie!",
        "He likes watching Kapitan Bomba as fuck and has a pug named 'Winston' as Parkway Drive vocalist!"
      ],
      imgMain: "assets/about/jasiek-main.jpg",
      imgAvatar: "assets/about/jasiek-avatar.jpg",
      imgPosition: 'right',
      equpiment: [
        {
          header: "Guitars",
          list: [
            "Skervesen 7 Bariton BrownFlamedTop Premium",
            "Skervesen 7 GreenBlueFlamedTop Premium"
          ]
        },
        {
          header: "Amp Modelers",
          list: [
            "Fractal floor FM3 - for gigs",
            "Kemper - backup"
          ]
        }
      ]
    },
    {
      name: "Konrad",
      nick: "KondziQ",
      surname: "Kochutek",
      role: 'Bassist',
      description: [
        "Extra the best bassist in the world! He plays using pick but sounds like a figner.",
        "Fan of sports especially gym! Yeah it's true his farts has extra proteins and called as 'anabolic fart'",
      ],
      imgMain: "assets/about/kondzik-main.jpg",
      imgAvatar: "assets/about/kondzik-avatar.jpg",
      imgPosition: 'left',
      equpiment: [
        {
          header: "Basses",
          list: [
            "Ibanez Headless 5 Black WDM",
            "Fender White v4"
          ]
        },
        {
          header: "Amp Modelers",
          list: [
            "Helix Stomp"
          ]
        }
      ]
    },
    {
      name: "Paweł",
      nick: "Pablo",
      surname: "Kardis",
      role: 'Drummer',
      description: [
        "Extra the best drummer in the world! He plays using especially designed drumsticks!",
        "Fan of heavy metal, he likes groove and fat riffs as fuck!",
      ],
      imgMain: "assets/about/pawel-main.jpg",
      imgAvatar: "assets/about/pawel-avatar.jpg",
      imgPosition: 'right',
      equpiment: [
        {
          header: "Drums",
          list: [
            "DW Satin Oil Set Regal Blue Gold",
            '22" x 18" Bass Drum',
            '08" x 07" Tom Tom',
            '10" x 08" Tom Tom',
            '12" x 09" Tom Tom',
            '14" x 12" Stand Tom(X)',
            '16" x 14" Stand Tom',
            '14" x 6,5" Snare Drum',
          ]
        },
        {
          header: "Shellset",
          list: [
            '14" HHX Compression Hi-Hats',
            '19" AAXtreme Chinese',
            '19" HHX Stage Crash',
            '21" HHX Stage Crash',
            '20" HHX Stage Crash',
            '19" Paragon Chinese/15" HH thin Crash(stacked)',
            '15" HHX Stage Hats',
            '22" Legacy Ride (as crash)',
            '21" AAXtreme Chinese',]
        }
      ]
    }
  ]);
  private musicians = signal<IMusican[]>([]);

  private homepageEN$ = toSignal(this.getHomePageContent());
  private homepagePL$ = toSignal(this.getHomePageContent());
   homepageContent = computed<IBackendData<IHomepageBackendData<IIncomingGig>>>(
    () => ({
      eng: this.homepageEN$(),
      pl: this.homepageEN$()
    })
   );

  private aboutContentEN = signal<any>(null);
  private aboutContentPL = signal<any>(null);

  private merchContentEN = signal<any>(null);
  private merchContentPL = signal<any>(null);

  constructor(@Inject("Environment") private env: string) { }

  getMusiciansInfo(): Observable<IMusican[]> {
    if (!this.musicians().length) {
      return of(this.backendData())
        .pipe(
          delay(2000),
          tap((data) => {
            this.musicians.set(data);
          })
        );
    }

    return of(this.musicians());
  }

  getHomePageContent(): Observable<IHomepageBackendData<IIncomingGig>> {
    const urlEN = `${this.env}eng/home.json`;
    const urlPL = `${this.env}pl/home.json`;

    return this.http
      .get<IHomepageBackendData<IIncomingGigFromBackend>>(urlEN)
      .pipe(
        map(
          hpcontent => {
            const { gigs } = hpcontent;
            const allGigs: IIncomingGig[] = [];

            for (let gig of gigs) {
              allGigs.push({
                ...gig,
                when: new Date(gig.when)
              })
            };

            return  {
              ...hpcontent,
              gigs: allGigs
            }
          }
        )
      )
  }

  // getAboutPageContent() {
  //   const url = "";
  //   this.http
  //     .get<IBackendData>(url)
  //     .pipe()
  //     .subscribe(
  //       data => { }
  //     );
  // }

  // getMetchPageContent() {
  //   const url = "";
  //   this.http
  //     .get<IBackendData>(url)
  //     .subscribe(data => { });
  // }
}

