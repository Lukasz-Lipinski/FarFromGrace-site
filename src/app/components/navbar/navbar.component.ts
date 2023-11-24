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
      href: "/",
      label: "Home"
    },
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

  trackLink = (index: number): string => `${this.links[index].label}-${index}`;
}
