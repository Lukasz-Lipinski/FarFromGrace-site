import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from '../item-card/IMerch';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IFilterForm {
  maxPrice: FormControl<number>;
  minPrice: FormControl<number>;
  productType: FormControl<string>;
}

interface IFilterFormControl {
  label: string;
  value: keyof IFilterForm;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  private sidebarForm = new FormGroup<IFilterForm>({
    maxPrice: new FormControl<number>(1000, {
      nonNullable: true,
      validators: [
        Validators.max(1000),
      ]
    }),
    minPrice: new FormControl<number>(0, {
      nonNullable: true,
      validators: [
        Validators.min(0)
      ]
    }),
    productType: new FormControl<string>(Category[Category.Hat], {
      nonNullable: true,
    }),
  });
  get sidebarFormGetter(): FormGroup<IFilterForm> {
    return this.sidebarForm;
  }
  private formControls: IFilterFormControl[] = [
    {
      label: 'Max price',
      value: 'maxPrice',
    },
    {
      label: 'Min price',
      value: 'minPrice',
    },
    {
      label: 'Product type',
      value: 'productType',
    }
  ];
  get formControlsGetter(): IFilterFormControl[] {
    return this.formControls;
  }
  private maxPrice: number = 1000;
  private minPrice: number = 0;
  private productType: string = Category[Category.Hat];

  private productsRange: string[] = [
    Category[Category.Hat],
    Category[Category.Hoodie],
    Category[Category.Sweater],
    Category[Category.Tshirt],
  ];
  get productsRangeGetter(): string[] {
    return this.productsRange;
  }

  constructor() { }

  ngOnInit() {
  }

}
