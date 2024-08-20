import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconNamesEnum } from 'ngx-bootstrap-icons';

export interface ILinkWithIcon {
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
  isCentered = input<boolean>(false);

  private icons: ILinkWithIcon[] = [
    {
      href: "https://www.facebook.com/ffgmetalcore",
      name: IconNamesEnum.Facebook,
    },
    {
      href: "https://www.instagram.com/farfromgrace_official",
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

  public get getStyles(): string {
    return this.isCentered() ? `container container-full container-center` : "";
  }

}
