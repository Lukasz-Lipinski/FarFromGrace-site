import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
