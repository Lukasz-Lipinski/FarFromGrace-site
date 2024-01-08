import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  @Input() isSidebar: boolean = false;
  @Input() verticalContent: boolean = false;
  @Input() justifyContentCenter: boolean = false;
  @Input() gap: number = 0;
  @Input() isBackground: boolean = true;
  @Input() isFullsize: boolean = true;

  get getClassOptions() {
    const verticalContent = this.verticalContent ? "container-column" : "";
    const justifyContentCenter = this.justifyContentCenter ? "container-center" : "";
    const fullsize = this.isFullsize ? "container-full" : "";
    const alignItemsCenter = this.justifyContentCenter && this.verticalContent ? "container-column" : "";
    return `${verticalContent} ${justifyContentCenter} ${alignItemsCenter} ${fullsize}`;
  }
  get getGap() {
    return this.gap + "px";
  };
  get getBackground() {
    return this.isBackground ? "glass glass-border" : "";
  }
}
