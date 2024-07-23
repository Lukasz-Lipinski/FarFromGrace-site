import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Category } from '../item-card/IMerch';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface IProductTypes {
  hat: FormControl<boolean>;
  hoodie: FormControl<boolean>;
  sweater: FormControl<boolean>;
  tshirt: FormControl<boolean>;
}

export interface IFilterForm {
  maxPrice: FormControl<number>;
  minPrice: FormControl<number>;
  productTypes: FormGroup<IProductTypes>;
}

interface IProductsRangeElement {
  label: string;
  controlName: string;
}

export interface IQueryParamsDetials {
  maxPrice: string;
  minPrice: string;
  hat: string;
  hoodie: string;
  sweater: string;
  tshirt: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  getDisplayWidth = (value: number) => `${value}zł`;

  // Max i min value for price range
  private maxVal = 1000;
  get getMaxVal() {
    return this.maxVal;
  }
  private minVal = 0;
  get getMinVal() {
    return this.minVal;
  }

  private sidebarForm = new FormGroup<IFilterForm>({
    maxPrice: new FormControl<number>(this.maxVal, {
      nonNullable: true,
      validators: [
        Validators.max(this.maxVal),
      ]
    }),
    minPrice: new FormControl<number>(this.minVal, {
      nonNullable: true,
      validators: [
        Validators.min(this.minVal)
      ]
    }),
    productTypes: new FormGroup({
      hat: new FormControl<boolean>(false, {
        nonNullable: true,
      }),
      hoodie: new FormControl<boolean>(false, {
        nonNullable: true,
      }),
      sweater: new FormControl<boolean>(false, {
        nonNullable: true,
      }),
      tshirt: new FormControl<boolean>(false, {
        nonNullable: true,
      })
    })
  });
  get sidebarFormGetter(): FormGroup<IFilterForm> {
    return this.sidebarForm;
  }
  private productsRange: IProductsRangeElement[] = [
    {
      label:
        Category[Category.Hat],
      controlName: "hat"
    },
    {
      label:
        Category[Category.Hoodie],
      controlName: "hoodie",
    },
    {
      label:
        Category[Category.Sweater],
      controlName: "sweater",
    },
    {
      label: Category[Category.Tshirt],
      controlName: "tshirt",
    }

  ];
  get productsRangeGetter(): IProductsRangeElement[] {
    return this.productsRange;
  }

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private convertToBoolean = (val: "true" | "false" | string) => val === "true" ? true : false;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.keys(params).length) {
        const { hat, hoodie, maxPrice, minPrice, sweater, tshirt } = params as IQueryParamsDetials;

        this.sidebarForm.setValue({
          maxPrice: Number(maxPrice),
          minPrice: Number(minPrice),
          productTypes: {
            hat: this.convertToBoolean(hat),
            hoodie: this.convertToBoolean(hoodie),
            sweater: this.convertToBoolean(sweater),
            tshirt: this.convertToBoolean(tshirt),
          }
        });
      }
    });
  }

  onFilter() {
    const { maxPrice, minPrice, productTypes } = this.sidebarForm.value;
    this.router.navigate(['/merch'], {
      queryParams: {
        maxPrice,
        minPrice,
        ...productTypes,
      }
    });
  }

}
