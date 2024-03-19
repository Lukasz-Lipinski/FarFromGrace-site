import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContentService, IMusican } from '../../content/content.service';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule],
})
export class AboutPageComponent {
  private contentService = inject(ContentService);

  get getBio() {
    return this.contentService.aboutpageContent().eng?.bio;
  }
  get getFFGMembersPicture() {
    return this.contentService.aboutpageContent().eng?.bandImg;
  }
  private musiciansData = computed(
    () => this.contentService.aboutpageContent().eng?.musicians
  );
  get getMusiciansData() {
    return this.musiciansData();
  };
  private selectedMusician = signal<IMusican | null>(null);
  get getSelectedMusician() {
    return this.selectedMusician;
  }

  showDialogWithData($event: IMusican) {
    this.selectedMusician.set($event);
    scrollTo({
      top: screen.width,
      behavior: 'smooth'
    });
  }
}
