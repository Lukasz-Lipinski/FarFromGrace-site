import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, combineLatest, concatMap, delay, map, of, tap, } from 'rxjs';
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

interface IAboutpageBackendData {
  bandImg: string;
  bio: string[];
  musicians: IMusican[]
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

  private homepage$ = toSignal(this.getHomePageContent());
   homepageContent = computed<IBackendData<IHomepageBackendData<IIncomingGig>>>(
    () => ({
      eng: this.homepage$()?.[0],
      pl: this.homepage$()?.[1]
    })
   );

  private aboutpage$ = toSignal(this.getAboutPageContent());
  aboutpageContent = computed<IBackendData<IAboutpageBackendData>>(
    () => ({
      eng: this.aboutpage$()?.[0],
      pl: this.aboutpage$()?.[1]
    })
  );

  private merchContentEN = signal<any>(null);
  private merchContentPL = signal<any>(null);

  constructor(@Inject("Environment") private env: string) { }

  private mapGigsArray(gigs: IIncomingGigFromBackend[]): IIncomingGig[] {
    const mappedGigs: IIncomingGig[] = [];
    for (let gig of gigs) {
      mappedGigs.push({
        ...gig,
        when: new Date(gig.when)
      })
     };

     return mappedGigs;
  }

  getHomePageContent(): Observable<[IHomepageBackendData<IIncomingGig>, IHomepageBackendData<IIncomingGig>]> {
    const urlEN$ = this.http.get<IHomepageBackendData<IIncomingGigFromBackend>>(`${this.env}eng/home.json`);
    const urlPL$ = this.http.get<IHomepageBackendData<IIncomingGigFromBackend>>(`${this.env}pl/home.json`);

    return combineLatest<[IHomepageBackendData<IIncomingGigFromBackend>, IHomepageBackendData<IIncomingGigFromBackend>]>([urlEN$, urlPL$])
            .pipe(
              map(items => {

               return [
                {
                  ...items[0],
                  gigs: this.mapGigsArray(items[0].gigs)
                },
                {
                  ...items[1],
                  gigs: this.mapGigsArray(items[1].gigs)
                }
               ] as [IHomepageBackendData<IIncomingGig>, IHomepageBackendData<IIncomingGig>]
              })
            )
  }

  getAboutPageContent(): Observable<[IAboutpageBackendData, IAboutpageBackendData]> {
    const urlEN$ = this.http.get<IAboutpageBackendData>(`${this.env}eng/about.json`);
    const urlPL$ = this.http.get<IAboutpageBackendData>(`${this.env}pl/about.json`);
    return combineLatest<[IAboutpageBackendData, IAboutpageBackendData]>([urlEN$,urlPL$])
  }

  // getMetchPageContent() {
  //   const url = "";
  //   this.http
  //     .get<IBackendData>(url)
  //     .subscribe(data => { });
  // }
}

