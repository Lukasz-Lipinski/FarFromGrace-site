import { ChangeDetectionStrategy, Component, Input, computed, input, output, signal } from '@angular/core';
import { IMusican } from "../../services/content/content.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  readonly selectedMusician = input<IMusican | null>(null);
  unselectMusician = output();

  get getMusician() {
    return this.selectedMusician();
  }

  get getFullname() {
    return `${this.selectedMusician()!.name} ${this.selectedMusician()!.surname}`;
  }

  private isShown = computed<boolean>(() => !!this.selectedMusician());
  get getIsShown() {
    return this.isShown();
  }

  private comuptedHeight = computed(
    () => this.isShown() ? `${window.scrollY}px` : "0px"
  );
  get getCurrentHeight() {
    return this.comuptedHeight();
  }

  onClose() {
    this.unselectMusician.emit();
  }
  onBlockClosing(event: MouseEvent) {
    event.stopPropagation();
  }
}
