import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-data-badge',
  templateUrl: './data-badge.component.html',
  styleUrl: './data-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBadgeComponent {
  day = input.required<number | string>();
  month = input.required<string>();

  get getDay() {
    return this.day().toString();
  }
  get getMonth() {
    return this.month();
  }
}
