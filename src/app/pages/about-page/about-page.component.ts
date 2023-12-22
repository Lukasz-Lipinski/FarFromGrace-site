import { toSignal } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContentService, IMusican } from './content/content.service';
import { MatDialog } from '@angular/material/dialog';
import { MusicianDetailsComponent } from '../../components/musician-details/musician-details.component';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule]
})
export class AboutPageComponent implements OnInit {
  private dialog = inject(MatDialog);
  private contentService = inject(ContentService);
  private ffgMembersPicture = "assets/about/all_members.webp";
  get getFFGMembersPicture() {
    return this.ffgMembersPicture;
  }
  private musiciansData = toSignal(this.contentService.getMusiciansInfo());
  get getMusiciansData() {
    return this.musiciansData()
  };
  private selectedMusician = signal<IMusican | null>(null);
  get getSelectedMusician() {
    return this.selectedMusician();
  }

  constructor() { }

  ngOnInit() {
  }

  showDialogWithData($event: IMusican) {
    this.selectedMusician.set($event);
    this.dialog.open(MusicianDetailsComponent, {
      data: $event
    });
  }
}
