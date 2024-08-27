import { Routes } from "@angular/router";
import { HomepageResolver } from "./services/resolvers/homepage.resolver";
import { AboutpageResolver } from "./services/resolvers/aboutpage.resolver";
import { DiscographyResolver } from "./services/resolvers/discography.resolver";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home-page/home-page.component").then(
        (m) => m.HomePageComponent
      ),
    resolve: {
      gigsAndNews: HomepageResolver,
    },
  },
  {
    path: "discography",
    loadComponent: () =>
      import("./pages/discography-page/discography-page.component").then(
        (m) => m.DiscographyPageComponent
      ),
    resolve: {
      discography: DiscographyResolver,
    },
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about-page/about-page.component").then(
        (m) => m.AboutPageComponent
      ),
    resolve: {
      about: AboutpageResolver,
    },
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./pages/contact-page/contact-page.component").then(
        (m) => m.ContactPageComponent
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
