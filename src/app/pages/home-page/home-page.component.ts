import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, of, switchMap } from "rxjs";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { IIncomingGig } from "../../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component";
import {
  ContentService,
  IBackendData,
  IHomepageBackendData,
} from "../../services/content/content.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  imports: [SharedModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private sortedGigs = (data: IHomepageBackendData<IIncomingGig>) =>
    data.gigs.sort(
      (a, b) => new Date(a.when).getTime() - new Date(b.when).getTime()
    );
  private activatedRoute = inject(ActivatedRoute);
  private contentService = inject(ContentService);
  private gigsAndNews = toSignal<
    IBackendData<IHomepageBackendData<IIncomingGig>>
  >(
    this.activatedRoute.data.pipe(
      takeUntilDestroyed(),
      switchMap(
        (resolverData) =>
          of(resolverData["gigsAndNews"]) as Observable<
            IBackendData<IHomepageBackendData<IIncomingGig>>
          >
      ),
      map((data) => {
        data.eng!.gigs = this.sortedGigs(data.eng!);
        data.pl!.gigs = this.sortedGigs(data.pl!);
        return data;
      })
    )
  );
  private contentTookBySelectedLanguage = computed(() => {
    const { [this.contentService.lang()]: selectedContent } =
      this.gigsAndNews()!;
    return selectedContent as IHomepageBackendData<IIncomingGig>;
  });

  private gigs = computed(
    () => this.contentTookBySelectedLanguage()?.gigs ?? []
  );
  private news = computed(
    () => this.contentTookBySelectedLanguage()?.news ?? []
  );

  public get getGigs() {
    return this.gigs();
  }

  public get getNews() {
    return this.news();
  }
  private contentIsLoaded = computed(() =>
    this.gigs() && this.news() ? true : false
  );
  get pageIsReadyToDispaly() {
    return this.contentIsLoaded();
  }

  //translations
  get getTranslations() {
    return this.contentService.translations()!.homepage;
  }
}
