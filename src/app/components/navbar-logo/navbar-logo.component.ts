import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLogoComponent {
  private url = "../../../assets/svg/logo/navbar-logo.svg";
  get getUrl() {
    return this.url;
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
  }

}
