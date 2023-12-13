import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconNamesEnum } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-navbar-icons',
  templateUrl: './navbar-icons.component.html',
  styleUrl: './navbar-icons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarIconsComponent {
  private icons = [
    IconNamesEnum.Facebook,
    IconNamesEnum.Instagram,
    IconNamesEnum.Spotify,
    IconNamesEnum.Youtube,
  ];
  get getIcons() {
    return this.icons;
  }
}
