import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { IMusican } from "../../services/content/content.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  @Input({
    required: true,
  }) selectedMusican = signal<IMusican | null>(null);
  get getFullname() {
    return `${this.selectedMusican()!.name} ${this.selectedMusican()!.surname}`;
  }
  isShown = computed<boolean>(() => !!this.selectedMusican());
  private comuptedHeight = computed(
    () => this.isShown() ? `${window.scrollY}px` : "0px"
  );
  get getCurrentHeight() {
    return this.comuptedHeight();
  }

  onClose() {
    this.selectedMusican.set(null);
  }
  onBlockClosing(event: MouseEvent) {
    event.stopPropagation();
  }
}
