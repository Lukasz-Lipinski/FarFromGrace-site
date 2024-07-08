import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  isSidebar = input(false);
  verticalContent = input(false);
  justifyContentCenter = input(false);
  gap = input(0);
  isBackground = input(true);
  isFullsize = input(true);
  pageisReadyToDisplay = input.required<boolean>();

  get getClassOptions() {
    const verticalContent = this.verticalContent() ? "container-column" : "";
    const justifyContentCenter = this.justifyContentCenter() ? "container-center" : "";
    const fullsize = this.isFullsize() ? "container-full" : "";
    const alignItemsCenter = this.justifyContentCenter() && this.verticalContent() ? "container-column" : "";
    return `${verticalContent} ${justifyContentCenter} ${alignItemsCenter} ${fullsize}`;
  }
  get getGap() {
    return `${this.gap()}px`;
  };
  get getBackground() {
    return this.isBackground() ? "glass glass-border" : "";
  }
  get getIsSidebar() {
    return this.isSidebar();
  }
  get pageIsReady() {
    return this.pageisReadyToDisplay();
  }
}
