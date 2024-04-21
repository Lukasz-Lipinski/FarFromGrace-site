import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ILink } from "../navbar.component";

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileComponent {
  @Input({
    required: true
  }) links!: ILink[];

  public get getLinks(): ILink[] {
    return this.links;
  }

  trackLink = (index: number): string => `${this.links[index].label}-${index}`;

}
