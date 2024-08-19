import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, catchError, combineLatest, map, of } from 'rxjs';
import { IIncomingGig } from '../../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component';
import { IAlbum } from "../../components/album-section/album-section.component";

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
  equipment: IEquipmentItem[];
  instagram: string;
}

interface IHomepageBackendData<T> {
  gigs: T[];
  news: string[];
}

export interface IAboutpageBackendData {
  bandImg: string;
  bio: string[];
  musicians: IMusican[];
}

interface IBackendData<T> {
  pl: T | undefined;
  eng: T | undefined;
}

interface IIncomingGigFromBackend extends Omit<IIncomingGig, "when"> {
  when: string;
}

export interface IEmailData {
  text: string;
  subject: string;
  name: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private http = inject(HttpClient);

  private aboutpage$ = toSignal(this.getAboutPageContent());
  aboutpageContent = computed<IBackendData<IAboutpageBackendData>>(
    () => ({
      eng: this.aboutpage$()?.[0],
      pl: this.aboutpage$()?.[1]
    })
  );

  constructor(@Inject("Environment") private env: { dbURL: string; serviceURL: string; }) { }

  private mapGigsArray(gigs: IIncomingGigFromBackend[]): IIncomingGig[] {
    const mappedGigs: IIncomingGig[] = [];
    for (let gig of gigs) {
      mappedGigs.push({
        ...gig,
        when: new Date(gig.when)
      });
    };

    return mappedGigs;
  }

  getHomePageContent(): Observable<[IHomepageBackendData<IIncomingGig>, IHomepageBackendData<IIncomingGig>]> {
    const urlEN$ = this.http.get<IHomepageBackendData<IIncomingGigFromBackend>>(`${this.env.dbURL}eng/home.json`, {
      headers: {
        "Accept-Encoding": "gzip",
      }
    });
    const urlPL$ = this.http.get<IHomepageBackendData<IIncomingGigFromBackend>>(`${this.env.dbURL}pl/home.json`);

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
          ] as [IHomepageBackendData<IIncomingGig>, IHomepageBackendData<IIncomingGig>];
        }),
        catchError((err) => of([
          {},
          {},
        ] as [IHomepageBackendData<IIncomingGig>, IHomepageBackendData<IIncomingGig>]))
      );
  }

  getAboutPageContent(): Observable<[IAboutpageBackendData, IAboutpageBackendData]> {
    const urlEN$ = this.http.get<IAboutpageBackendData>(`${this.env.dbURL}eng/about.json`, {
      headers: {
        "Accept-Encoding": "gzip",
      }
    });
    const urlPL$ = this.http.get<IAboutpageBackendData>(`${this.env.dbURL}pl/about.json`);
    return combineLatest<[IAboutpageBackendData, IAboutpageBackendData]>([urlEN$, urlPL$]);
  }

  getDiscographyContent(): Observable<[IAlbum[], IAlbum[]]> {
    const urlEN$ = this.http.get<IAlbum[]>(`${this.env.dbURL}eng/discography.json`, {
      headers: {
        "Accept-Encoding": "gzip",
      }
    });
    const urlPL$ = this.http.get<IAlbum[]>(`${this.env.dbURL}pl/discography.json`);

    return combineLatest([urlEN$, urlPL$]);
  }

  sendEmail(data: IEmailData) {
    const url = `${this.env.serviceURL}api/email/send`;
    this.http
      .post(url, data)
      .subscribe({
        next: (data) => {
          console.log(data);
        }
      });
  }
}
