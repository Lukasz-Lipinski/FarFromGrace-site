import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IAboutpageBackendData, IMusican } from '../../services/content/content.service';
import { ImgService } from "../../services/img/img.service";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { Observable, of, switchMap } from "rxjs";
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule],
})
export class AboutPageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private imgService = inject(ImgService);
  private aboutContent = toSignal(this.activatedRoute.data.pipe(
    takeUntilDestroyed(),
    switchMap((aboutContent) => of(aboutContent['about']) as Observable<IAboutpageBackendData>)));

  private contentIsLoaded = computed(() => {
    return this.getMusiciansData && this.imgService.checkIfImagesReadyToDispaly() || false;
  });

  get pageIsReadyToDispaly() {
    return this.contentIsLoaded();
  }

  get getBio() {
    return this.aboutContent()?.bio;
  }

  get getPicture() {
    return '/assets/photos/toghether/all_members_mid.webp';
  }
  private musiciansData = computed(
    () => this.aboutContent()?.musicians
  );
  get getMusiciansData() {
    return this.musiciansData();
  };
  private selectedMusician = signal<IMusican | null>(null);
  get getSelectedMusician() {
    return this.selectedMusician;
  }
  onselectMusician() {
    this.selectedMusician.set(null);
  }

  showDialogWithData($event: IMusican) {
    this.selectedMusician.set($event);
  }
}
