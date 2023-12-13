import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconNamesEnum } from 'ngx-bootstrap-icons';

interface ILinkWithIcon {
  name: IconNamesEnum;
  href: string;
}

@Component({
  selector: 'app-navbar-icons',
  templateUrl: './navbar-icons.component.html',
  styleUrl: './navbar-icons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarIconsComponent {
  private icons: ILinkWithIcon[] = [
    {
      href: "https://www.facebook.com/ffgmetalcore",
      name: IconNamesEnum.Facebook,
    },
    {
      href: "",
      name: IconNamesEnum.Instagram,
    },
    {
      href: "https://open.spotify.com/artist/6HN1LIonmzBZ6psQKmYPSv",
      name: IconNamesEnum.Spotify,
    },
    {
      href: "https://www.youtube.com/@farfromgraceeu8882",
      name: IconNamesEnum.Youtube,
    }
  ];
  get getIcons() {
    return this.icons;
  }
}
