import { ChangeDetectionStrategy, Component, Input, OnInit, WritableSignal, signal } from '@angular/core';
import { Category } from './IMerch';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent implements OnInit {
  private name = signal<string>("");
  @Input({
    required: true
  }) set setName(val: string) {
    this.name.set(val);
  }
  get getName() {
    return this.name();
  }
  private price = signal<number>(0);
  @Input({
    required: true
  }) set setPrice(val: number) {
    this.price.set(val);
  }
  get getPrice() {
    return this.price();
  }
  private img = signal<string>("");
  @Input({
    required: true
  }) set setImg(val: string) {
    this.img.set(val);
  }
  get getImg() {
    return this.img();
  }
  private description = signal<string>("");
  @Input({
    required: true
  }) set setDescription(val: string) {
    this.description.set(val);
  }
  get getDesctiption() {
    return this.description();
  }
  private category = signal<string>(Category[Category.Hat]);
  @Input({
    required: true
  }) set setCategory(val: number) {
    this.category.set(Category[val]);
  }
  get getCategory() {
    return this.category();
  }

  constructor() { }

  ngOnInit() {
  }

}
