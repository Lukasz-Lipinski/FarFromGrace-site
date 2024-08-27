import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, computed, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import {
  Observable,
  OperatorFunction,
  catchError,
  combineLatest,
  map,
  of,
} from "rxjs";
import { IIncomingGig } from "../../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component";
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

export interface IHomepageBackendData<T> {
  gigs: T[];
  news: string[];
}

export interface IAboutpageBackendData {
  bandImg: string;
  bio: string[];
  musicians: IMusican[];
}

export interface IBackendData<T> {
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

export type TypeLang = "eng" | "pl";
export type TypeTranslation = {
  eng: {
    contactpage: { [key: string]: any };
    homepage: { [key: string]: any };
  };
  pl: {
    contactpage: { [key: string]: any };
    homepage: { [key: string]: any };
  };
};
@Injectable({
  providedIn: "root",
})
export class ContentService {
  private http = inject(HttpClient);
  private translationsFileUrl = "assets/translations/translations.json";
  private readonly translations$ = toSignal(
    this.http.get<TypeTranslation>(this.translationsFileUrl)
  );
  readonly translations = computed(() => {
    const { [this.lang()]: translatedContent } = this.translations$()!;
    return translatedContent;
  });
  lang = signal<TypeLang>("eng");

  constructor(
    @Inject("Environment") private env: { dbURL: string; serviceURL: string }
  ) {}

  private mapGigsArray(gigs: IIncomingGigFromBackend[]): IIncomingGig[] {
    const mappedGigs: IIncomingGig[] = [];
    for (let gig of gigs) {
      mappedGigs.push({
        ...gig,
        when: new Date(gig.when),
      });
    }

    return mappedGigs;
  }

  setContentForSelectedLang = <T>(data: IBackendData<T>): IBackendData<T> => {
    const { [this.lang()]: selectedLanguage } = data;

    return selectedLanguage as IBackendData<T>;
  };

  private transformDataToIBackendData = <T, R>() =>
    map(
      (data: [R, R]) =>
        ({
          eng: data[0],
          pl: data[1],
        } as IBackendData<T>)
    );

  getHomePageContent(): Observable<
    IBackendData<IHomepageBackendData<IIncomingGig>>
  > {
    const urlEN$ = this.http.get<IHomepageBackendData<IIncomingGigFromBackend>>(
      `${this.env.dbURL}eng/home.json`,
      {
        headers: {
          "Accept-Encoding": "gzip",
        },
      }
    );
    const urlPL$ = this.http.get<IHomepageBackendData<IIncomingGigFromBackend>>(
      `${this.env.dbURL}pl/home.json`
    );

    return combineLatest<
      [
        IHomepageBackendData<IIncomingGigFromBackend>,
        IHomepageBackendData<IIncomingGigFromBackend>
      ]
    >([urlEN$, urlPL$]).pipe(
      map((items) => {
        return {
          eng: {
            ...items[0],
            gigs: this.mapGigsArray(items[0].gigs),
          },
          pl: {
            ...items[1],
            gigs: this.mapGigsArray(items[1].gigs),
          },
        } as IBackendData<IHomepageBackendData<IIncomingGig>>;
      }),
      catchError((err) =>
        of({} as IBackendData<IHomepageBackendData<IIncomingGig>>)
      )
    );
  }

  getAboutPageContent(): Observable<IBackendData<IAboutpageBackendData>> {
    const urlEN$ = this.http.get<IAboutpageBackendData>(
      `${this.env.dbURL}eng/about.json`,
      {
        headers: {
          "Accept-Encoding": "gzip",
        },
      }
    );
    const urlPL$ = this.http.get<IAboutpageBackendData>(
      `${this.env.dbURL}pl/about.json`
    );
    return combineLatest<[IAboutpageBackendData, IAboutpageBackendData]>([
      urlEN$,
      urlPL$,
    ]).pipe(
      this.transformDataToIBackendData<
        IAboutpageBackendData,
        IAboutpageBackendData
      >()
    );
  }

  getDiscographyContent(): Observable<IBackendData<IAlbum[]>> {
    const urlEN$ = this.http.get<IAlbum[]>(
      `${this.env.dbURL}eng/discography.json`,
      {
        headers: {
          "Accept-Encoding": "gzip",
        },
      }
    );
    const urlPL$ = this.http.get<IAlbum[]>(
      `${this.env.dbURL}pl/discography.json`
    );

    return combineLatest<[IAlbum[], IAlbum[]]>([urlEN$, urlPL$]).pipe(
      this.transformDataToIBackendData<IAlbum[], IAlbum[]>()
    );
  }

  sendEmail(data: IEmailData) {
    const url = `${this.env.serviceURL}api/email/send`;
    this.http.post(url, data).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
