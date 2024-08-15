import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLoaderComponent {
  private readonly loaderSrc: string = "assets/svg/white.svg";
  get getLoaderSrc() {
    return this.loaderSrc;
  }

  constructor() { }

}
