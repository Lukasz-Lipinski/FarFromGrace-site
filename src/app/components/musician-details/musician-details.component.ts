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
  private readonly onscrollRef: (((this: GlobalEventHandlers, ev: Event) => any) & ((this: Window, ev: Event) => any)) | null;

  public get getMusicianDetails(): IMusican {
    return this.musicianDetails()!;
  }

  constructor() {
    this.onscrollRef = window.onscroll;
    afterNextRender(() => {
      window.onscroll = () => {
        window.scrollTo(this.x, this.y);
      };
    });
  }

  ngOnDestroy() {
    window.onscroll = this.onscrollRef;
  }
}
