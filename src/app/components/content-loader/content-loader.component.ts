import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLoaderComponent {
  private readonly loaderSrc = "assets/svg/white.svg";
  get getLoaderSrc() {
    return this.loaderSrc;
  }
}
