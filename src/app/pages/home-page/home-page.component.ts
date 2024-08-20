import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { IIncomingGig } from '../../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [SharedModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomePageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private gigsAndNews = toSignal<{ gigs: IIncomingGig[], news: string[]; }>(this.activatedRoute.data.pipe(
    takeUntilDestroyed(),
    switchMap((resolverData) => of(resolverData['gigsAndNews']) as Observable<{ gigs: IIncomingGig[], news: string[]; }>),
    map(data => {
      const sortedGigs = data.gigs.sort((a, b) => new Date(a.when).getTime() - new Date(b.when).getTime());
      return { ...data, gigs: sortedGigs };
    })
  ));

  private gigs = computed(
    () => this.gigsAndNews()?.gigs ?? []
  );
  private news = computed(
    () => this.gigsAndNews()!.news ?? []
  );

  public get getGigs() {
    return this.gigs();
  }

  public get getNews() {
    return this.news();
  }
  private contentIsLoaded = computed(
    () => this.gigs() && this.news() ? true : false
  );
  get pageIsReadyToDispaly() {
    return this.contentIsLoaded();
  }
}
