import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { ActivatedRoute } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { IAlbum } from "../../components/album-section/album-section.component";

@Component({
  selector: 'app-discography-page',
  templateUrl: './discography-page.component.html',
  styleUrls: ['./discography-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscographyPageComponent {
  private activaedRoute = inject(ActivatedRoute);
  private discography = toSignal<IAlbum[]>(
    this.activaedRoute.data.pipe(
      map((data) => data['discography'][0] || [])
    )
  );

  public get getDiscography(): IAlbum[] {
    return this.discography()!;
  }

}
