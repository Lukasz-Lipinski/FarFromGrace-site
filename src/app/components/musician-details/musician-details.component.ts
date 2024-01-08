import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMusican } from '../../content/content.service';

@Component({
  selector: 'app-musician-details',
  templateUrl: './musician-details.component.html',
  styleUrl: './musician-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicianDetailsComponent {
  private data: IMusican = inject(MAT_DIALOG_DATA);
  get getData() {
    return this.data;
  }

  public get getFullname(): string {
    return `${this.data.name} ${this.data.nick} ${this.data.surname}`;
  }

}
