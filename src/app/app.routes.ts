import { ResolveFn, Routes } from '@angular/router';
import { IIncomingGig } from './components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component';
import { inject } from '@angular/core';
import { ContentService } from './content/content.service';
import { map } from 'rxjs';
import { IAlbum } from "./components/album-section/album-section.component";

const HomepageResolver: ResolveFn<{ gigs: IIncomingGig[], news: string[]; }> = () => {
  const content = inject(ContentService);

  return content.getHomePageContent().pipe(
    map((homepageData) => ({
      gigs: homepageData[0].gigs ?? [],
      news: homepageData[0].news ?? []
    }))
  );
};

const DiscographyResolver: ResolveFn<[IAlbum[], IAlbum[]]> = () => {
  const content = inject(ContentService);

  return content.getDiscographyContent();
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/home-page/home-page.component").then(m => m.HomePageComponent),
    resolve: {
      gigsAndNews: HomepageResolver,
    }
  },
  {
    path: 'discography',
    loadComponent: () => import("./pages/discography-page/discography-page.component").then(m => m.DiscographyPageComponent),
    resolve: {
      discography: DiscographyResolver,
    }
  },
  {
    path: 'about',
    loadComponent: () => import("./pages/about-page/about-page.component").then(m => m.AboutPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import("./pages/contact-page/contact-page.component").then(m => m.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
