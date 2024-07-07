import { ChangeDetectionStrategy, Component, Input, input } from "@angular/core";
import { ILink } from "../../navbar/navbar.component";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent {
  public setTitle = input.required<string>();
  public get getTitle(): string {
    return this.setTitle();
  }
  setImg = input.required<string>();
  public get getImg(): string {
    return `assets/discography/${this.setImg()}`;
  }
  public setDescription = input.required<string[]>();
  public get getDescription(): string[] {
    return this.setDescription();
  }
  setLinks = input.required<ILink[]>();
  public get getLinks(): ILink[] {
    return this.setLinks();
  }

}
