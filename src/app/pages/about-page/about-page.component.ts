import { toSignal } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContentService, IMusican } from './content/content.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule]
})
export class AboutPageComponent implements OnInit {
  private contentService = inject(ContentService);
  private musiciansData = toSignal(this.contentService.getMusiciansInfo());
  get getMusiciansData() {
    return this.musiciansData()
  };
  private selectedMusician = signal<IMusican | null>(null);
  get getSelectedMusician() {
    return this.selectedMusician();
  }
  private modal = inject(MatDialog);
  constructor() { }

  ngOnInit() {
  }

  showDialogWithData($event: IMusican) {
    this.modal.open(ModalComponent, {
      enterAnimationDuration: 200,
      exitAnimationDuration: 200
    });
    this.selectedMusician.set($event);
  }
}
