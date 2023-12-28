import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsSectionComponent implements OnInit {
  @Input({
    required: true
  }) set SetNews(news: string[]) {
    this.news.set(news);
  }
  private news = signal<string[]>([]);
  get getNews() {
    return this.news();
  }
  constructor() { }

  ngOnInit() {
  }

}

