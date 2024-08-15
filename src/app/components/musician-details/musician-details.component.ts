import { afterNextRender, ChangeDetectionStrategy, Component, input, Input, OnInit, signal } from '@angular/core';
import { IMusican } from '../../services/content/content.service';

@Component({
  selector: 'app-musician-details',
  templateUrl: './musician-details.component.html',
  styleUrls: ['./musician-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicianDetailsComponent {
  musicianDetails = input.required<IMusican | null>();
  private readonly y = window.scrollY;
  private readonly x = window.scrollX;

  public get getMusicianDetails(): IMusican {
    return this.musicianDetails()!;
  }

  constructor() {
    afterNextRender(() => {
      window.onscroll = () => {
        window.scrollTo(this.x, this.y);
      };
    });
  }

  ngOnDestroy() {
    window.onscroll = function () { };
  }
}
