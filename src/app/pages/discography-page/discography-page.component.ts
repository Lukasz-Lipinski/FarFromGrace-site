import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { ActivatedRoute } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { IAlbum } from "../../components/album-section/album-section.component";
import {
  ContentService,
  IBackendData,
} from "../../services/content/content.service";

@Component({
  selector: "app-discography-page",
  templateUrl: "./discography-page.component.html",
  styleUrls: ["./discography-page.component.scss"],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscographyPageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private contentService = inject(ContentService);
  private discography = toSignal<IBackendData<IAlbum[]>>(
    this.activatedRoute.data.pipe(map((data) => data["discography"]))
  );
  private contentByLanguage = computed(() => {
    const { [this.contentService.lang()]: content } = this.discography()!;
    return content;
  });

  public get getDiscography(): IAlbum[] {
    return this.contentByLanguage()!;
  }
  private contentIsFullyLoaded = computed(() => !!this.contentByLanguage());
  get pageIsReadyToDisplay() {
    return this.contentIsFullyLoaded();
  }
}
