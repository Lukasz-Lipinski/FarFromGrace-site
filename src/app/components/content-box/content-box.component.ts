import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrl: './content-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentBoxComponent {

}
