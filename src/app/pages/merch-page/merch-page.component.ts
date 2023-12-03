import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { Category, IMerch } from '../../components/item-card/IMerch';
import { IQueryParamsDetials } from '../../components/sidebar/sidebar.component';

interface IFilterOpts {
  minPrice: number;
  maxPrice: number;
  categories: string[];
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
  private activatedRoute = inject(ActivatedRoute);

  private merch = signal<IMerch[]>([
    { name: 'T-shirt', price: 120, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'T-shirt description', category: Category.Tshirt }
    , { name: 'Hat', price: 40, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hat description', category: Category.Hat }
    , { name: 'Hoodie', price: 200, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hoodie description', category: Category.Hoodie }
    , { name: 'Sweater', price: 150, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Sweater description', category: Category.Sweater }
    , { name: 'T-shirt', price: 80, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'T-shirt description', category: Category.Tshirt }
    , { name: 'Hat', price: 56, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hat description', category: Category.Hat }
    , { name: 'Hoodie', price: 129, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Hoodie description', category: Category.Hoodie }
    , { name: 'Sweater', price: 200, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'Sweater description', category: Category.Sweater }
    , { name: 'T-shirt', price: 100, img: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', description: 'T-shirt description', category: Category.Tshirt }
  ]);
  private filterOpts = signal<Partial<IFilterOpts>>({});
  private filteredMerch = computed(
    () => !Object.keys(this.filterOpts()).length ? this.merch() : this.merch().filter(
      item => item.price > this.filterOpts().minPrice! && item.price < this.filterOpts().maxPrice!
    )
  );
  get getMerch() {
    return this.filteredMerch();
  }
  constructor() { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const queryParams = params as IQueryParamsDetials;
      if (!Object.keys(queryParams).length) {
        return this.filterOpts.set({});
      }

      const categories: string[] = [];

      for (const [key, value] of Object.entries(queryParams)) {
        if (value == "true") categories.push(key as string);
      }

      return this.filterOpts.set({
        minPrice: +queryParams.minPrice,
        maxPrice: +queryParams.maxPrice,
        categories
      });

    })
  }
};
