import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContentService } from '../../content/content.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [SharedModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomePageComponent implements OnInit {
  private contentService = inject(ContentService);
  get getGigs() {
    return this.contentService.homepageContent().eng?.gigs;
  }
  get getNews() {
    return this.contentService.homepageContent().eng?.news;
  }

  constructor() { }

  ngOnInit() {
  }

}
