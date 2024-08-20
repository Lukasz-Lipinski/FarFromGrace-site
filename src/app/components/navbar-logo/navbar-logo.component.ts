import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.scss']
})
export class NavbarLogoComponent implements OnInit {
  private url = "../../../assets/svg/logo/navbar-logo.svg";
  get getUrl() {
    return this.url;
  }
  constructor() { }

  ngOnInit() {
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
  }

}
