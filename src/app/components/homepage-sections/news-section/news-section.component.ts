import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-news-section",
  templateUrl: "./news-section.component.html",
  styleUrls: ["./news-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSectionComponent {
  public readonly SetNews = input.required<string[]>();
  readonly header = input.required<string>();
  get getHeader() {
    return this.header();
  }
  get getNews() {
    return this.SetNews();
  }
}
