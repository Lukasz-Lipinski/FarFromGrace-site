import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { IAlbum } from "../../components/album-section/album-section.component";
import { IBackendData, ContentService } from "../content/content.service";

export const DiscographyResolver: ResolveFn<IBackendData<IAlbum[]>> = () => {
  const content = inject(ContentService);

  return content.getDiscographyContent();
};
