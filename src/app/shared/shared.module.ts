import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { NavbarComponent } from '../components/navbar/navbar.component';
import { ItemCardComponent } from '../components/item-card/item-card.component';
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarLogoComponent } from '../components/navbar-logo/navbar-logo.component';

const components: any[] = [NavbarComponent, ItemCardComponent, SpinnerComponent, SidebarComponent, NavbarLogoComponent];
const services: any[] = [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule, MatIconModule];

@NgModule({
  imports: [
    ...services,
  ],
  declarations: [...components],
  exports: [...services, ...components]
})
export class SharedModule { }
