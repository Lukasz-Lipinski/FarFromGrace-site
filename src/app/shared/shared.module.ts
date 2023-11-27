import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";

import { NavbarComponent } from '../components/navbar/navbar.component';
import { ItemCardComponent } from '../components/item-card/item-card.component';
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarLogoComponent } from '../components/navbar-logo/navbar-logo.component';
import { ContentBoxComponent } from '../components/content-box/content-box.component';
import { LayoutComponent } from '../components/layout/layout.component';

const components: any[] = [NavbarComponent, ItemCardComponent, SpinnerComponent, LayoutComponent, ContentBoxComponent, SidebarComponent, NavbarLogoComponent];
const services: any[] = [CommonModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule, MatIconModule];

@NgModule({
  imports: [
    ...services,
  ],
  declarations: [...components],
  exports: [...services, ...components]
})
export class SharedModule { }
