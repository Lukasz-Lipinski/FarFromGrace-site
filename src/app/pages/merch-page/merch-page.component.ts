import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

enum Category {
  Tshirt,
  Hat,
  Hoodie,
  Sweater,
}

interface IMerch {
  name: string;
  price: number;
  img: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-merch-page',
  templateUrl: './merch-page.component.html',
  styleUrls: ['./merch-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MerchPageComponent implements OnInit {
  private merch: IMerch[] = [
    { name: 'T-shirt', price: 120, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'T-shirt description', category: Category[Category.Tshirt] }
    , { name: 'Hat', price: 40, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hat description', category: Category[Category.Hat] }
    , { name: 'Hoodie', price: 200, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hoodie description', category: Category[Category.Hoodie] }
    , { name: 'Sweater', price: 150, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Sweater description', category: Category[Category.Sweater] }
    , { name: 'T-shirt', price: 80, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'T-shirt description', category: Category[Category.Tshirt] }
    , { name: 'Hat', price: 56, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hat description', category: Category[Category.Hat] }
    , { name: 'Hoodie', price: 129, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hoodie description', category: Category[Category.Hoodie] }
    , { name: 'Sweater', price: 200, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Sweater description', category: Category[Category.Sweater] }
    , { name: 'T-shirt', price: 100, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'T-shirt description', category: Category[Category.Tshirt] }
  ];

  get getMerch() {
    return this.merch;
  }
  constructor() { }

  ngOnInit() {
  }

}
