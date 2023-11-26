import { ChangeDetectionStrategy, Component } from "@angular/core";

interface ILink {
  href: string;
  label: string;
}

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private links: ILink[] = [
    {
      href: "/about",
      label: "About"
    },
    {
      href: "/contact",
      label: "Contact"
    },
    {
      href: "/merch",
      label: "Merch"
    }
  ];

  public get getLinks(): ILink[] {
    return this.links;
  }

  private src: string = "../../../assets/svg/logo/Logo-FFG-01-_2_.svg";
  get getSrc() {
    return this.src;
  }

  trackLink = (index: number): string => `${this.links[index].label}-${index}`;
}
