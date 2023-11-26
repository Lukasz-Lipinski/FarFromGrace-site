import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
