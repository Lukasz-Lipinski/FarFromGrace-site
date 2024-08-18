import { ChangeDetectionStrategy, Component, input, Input, OnInit, signal } from '@angular/core';
import { Category } from './IMerch';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {
  setName = input.required<string>();
  get getName() {
    return this.setName();
  }
  setPrice = input.required<number>();
  get getPrice() {
    return this.setPrice();
  }
  setImg = input.required<string>();
  get getImg() {
    return this.setImg();
  }
  setDescription = input.required<string>();
  get getDesctiption() {
    return this.setDescription();
  }
  setCategory = input.required<typeof Category[Category.Hat]>();
  get getCategory() {
    return this.setCategory();
  }
}
