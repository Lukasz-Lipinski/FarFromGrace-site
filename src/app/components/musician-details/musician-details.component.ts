import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { IMusican } from '../../content/content.service';

@Component({
  selector: 'app-musician-details',
  templateUrl: './musician-details.component.html',
  styleUrl: './musician-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicianDetailsComponent {
  @Input({
    required: true
  }) data = signal<IMusican | null>(null);
  get getData() {
    return this.data();
  }

  public get getFullname(): string {
    return this.getData ? `${this.getData.name} ${this.getData.nick} ${this.getData.surname}` : "";
  }

}
