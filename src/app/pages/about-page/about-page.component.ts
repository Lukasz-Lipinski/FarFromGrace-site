import { toSignal } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal, afterRender } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContentService, IMusican } from '../../content/content.service';
import { MatDialog } from '@angular/material/dialog';
import { MusicianDetailsComponent } from '../../components/musician-details/musician-details.component';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule],
})
export class AboutPageComponent implements OnInit {
  private dialog = inject(MatDialog);
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
    return this.selectedMusician();
  }

  constructor() { }
  ngOnInit(): void {
  }

  showDialogWithData($event: IMusican) {
    this.selectedMusician.set($event);

    if (this.dialog.openDialogs.length) {
      this.dialog.closeAll();
    };

    this.dialog.open(MusicianDetailsComponent, {
      enterAnimationDuration: 200,
      exitAnimationDuration: 200,
      data: $event,
    });
  }
}
