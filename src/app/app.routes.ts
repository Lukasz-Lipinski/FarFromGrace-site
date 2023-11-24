import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/home-page/home-page.component").then(m => m.HomePageComponent)
  },
  {
    path: 'merch',
    loadComponent: () => import("./pages/merch-page/merch-page.component").then(m => m.MerchPageComponent)
  },
  {
    path: 'about',
    loadComponent: () => import("./pages/about-page/about-page.component").then(m => m.AboutPageComponent)
  }
];
