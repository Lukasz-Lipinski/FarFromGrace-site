import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import {
  IBackendData,
  IAboutpageBackendData,
  ContentService,
} from "../content/content.service";

export const AboutpageResolver: ResolveFn<
  IBackendData<IAboutpageBackendData>
> = () => {
  const content = inject(ContentService);

  return content.getAboutPageContent();
};
