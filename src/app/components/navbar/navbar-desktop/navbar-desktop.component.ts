import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ILink } from "../navbar.component";

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDesktopComponent {
  links = input.required<ILink[]>();

  public get getLinks() {
    return this.links();
  }
}
