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
  private ratio = 1.53;
  get getWidth() {
    return 100;
  }
  setHeight = (width: number): number => width / this.ratio;
  constructor() { }

  ngOnInit() {
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
  }

}
