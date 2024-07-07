import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { IMusican } from '../../services/content/content.service';

@Component({
  selector: 'app-musician-details',
  templateUrl: './musician-details.component.html',
  styleUrls: ['./musician-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicianDetailsComponent {

  @Input({
    required: true
  }) musicianDetails = signal<IMusican | null>(null);

  public get getMusicianDetails(): IMusican {
    return this.musicianDetails()!;
  }
}
