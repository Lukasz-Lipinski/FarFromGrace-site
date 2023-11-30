import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category, IMerch } from '../item-card/IMerch';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  private maxPrice: number =  1000;
  private minPrice: number = 0;
  private productType: string = Category[Category.Hat];

  constructor() { }

  ngOnInit() {
  }

}
