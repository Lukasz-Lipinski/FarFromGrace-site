import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
} from "@angular/core";
import {
  ContentService,
  TypeLang,
} from "../../../services/content/content.service";

@Component({
  selector: "app-language-toggler",
  templateUrl: "./language-toggler.component.html",
  styleUrls: ["./language-toggler.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageTogglerComponent {
  private readonly contentService = inject(ContentService);

  selectedLanguage = computed(() => this.contentService.lang());

  protected language = model<TypeLang>(this.contentService.lang());
  protected setGlogalLanguage = () => {
    this.contentService.lang.set(this.language());
  };
}
