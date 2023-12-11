import { toSignal } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContentService } from './content/content.service';

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
  }

  constructor() { }

  ngOnInit() {
  }

}
