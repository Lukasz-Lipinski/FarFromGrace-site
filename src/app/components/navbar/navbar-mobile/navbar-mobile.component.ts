import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ILink } from "../navbar.component";
import { IconNamesEnum } from "ngx-bootstrap-icons";

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileComponent {
  links = input.required<ILink[]>();

  public get getIcon() {
    return IconNamesEnum.MenuButton;
  }

  public get getLinks(): ILink[] {
    return this.links();
  }

  trackLink = (index: number): string => `${this.links()[index].label}-${index}`;

}
