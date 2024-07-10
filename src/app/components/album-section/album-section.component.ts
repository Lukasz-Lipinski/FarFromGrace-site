import { Component, ChangeDetectionStrategy, input } from "@angular/core";
import { ILink } from "../navbar/navbar.component";

export interface IAlbum {
  title: string;
  img: string;
  description: string[];
  links: ILink[];
}

@Component({
  selector: 'app-album-section',
  templateUrl: './album-section.component.html',
  styleUrls: ['./album-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumSectionComponent {
  public albums = input.required<IAlbum[]>();
  public get getAlbums(): IAlbum[] {
    return this.albums();
  }

}
