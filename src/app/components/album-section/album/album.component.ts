import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ILink } from "../../navbar/navbar.component";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent {
  private title!: string;
  @Input({
    required: true
  }) set setTitle(text: string) {
    this.title = text;
  }
  public get getTitle(): string {
    return this.title;
  }
  private img!: string;
  @Input({
    required: true
  }) set setImg(src: string) {
    this.img = src;
  }
  public get getImg(): string {
    return this.img;
  }
  private description!: string[];
  @Input({
    required: true
  }) set setDescription(desc: string[]) {
    this.description = desc;
  }
  public get getDescription(): string[] {
    return this.description;
  }
  private links!: ILink[];
  @Input({
    required: true
  }) set setLinks(links: ILink[]) {
    this.links = links;
  }
  public get getLinks(): ILink[] {
    return this.links;
  }

}
