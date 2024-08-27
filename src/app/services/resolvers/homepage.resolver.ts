import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { IIncomingGig } from "../../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component";
import {
  IBackendData,
  IHomepageBackendData,
  ContentService,
} from "../content/content.service";

export const HomepageResolver: ResolveFn<
  IBackendData<IHomepageBackendData<IIncomingGig>>
> = () => {
  const content = inject(ContentService);

  return content.getHomePageContent();
};
