import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../about-page/content/content.service';

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

  constructor() { }

  ngOnInit() {
    this.contentService.getHomePageContent();
  }

}
