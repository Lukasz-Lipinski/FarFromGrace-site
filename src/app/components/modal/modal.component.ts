import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { IMusican } from "../../content/content.service";

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
  public isShown = computed<boolean>(() => !!this.selectedMusican());

}
