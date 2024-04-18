import { ResolveFn, Routes } from '@angular/router';
import { IIncomingGig } from './components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component';
import { inject } from '@angular/core';
import { ContentService } from './content/content.service';
import { map, Observable } from 'rxjs';

const HomepageResolver: ResolveFn<{gigs: IIncomingGig[], news: string[]}> = () => {
  const content = inject(ContentService);

  return content.getHomePageContent().pipe(
    map((homepageData) => ({
      gigs: homepageData[0].gigs ?? [],
      news: homepageData[0].news ?? []
    }))
  );
 }

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/home-page/home-page.component").then(m => m.HomePageComponent),
    resolve: {
      gigsAndNews: HomepageResolver,
    }
  },
  {
    path: 'merch',
    loadComponent: () => import("./pages/merch-page/merch-page.component").then(m => m.MerchPageComponent)
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
