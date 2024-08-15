import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'farfromgrace-site';
  private readonly routerStatus = toSignal(inject(Router).events);

  private backgroundSrc = "assets/background/background-with-mischief-color.webp";
  get getBackgroundSrc() {
    return this.backgroundSrc;
  }

  get isReadyToDisplay() {
    return this.routerStatus() instanceof NavigationEnd ? true : false;
  }
}
