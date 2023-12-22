import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatDialogModule } from '@angular/material/dialog';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { ItemCardComponent } from '../components/item-card/item-card.component';
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarLogoComponent } from '../components/navbar-logo/navbar-logo.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { MusicianCardComponent } from '../components/musician-card/musician-card.component';
import { NavbarIconsComponent } from '../components/navbar-icons/navbar-icons.component';
import { MusicianDetailsComponent } from '../components/musician-details/musician-details.component';

const components: any[] = [NavbarComponent, ItemCardComponent, SpinnerComponent, MusicianDetailsComponent, NavbarIconsComponent, LayoutComponent, SidebarComponent, NavbarLogoComponent, MusicianCardComponent];
const services: any[] = [NgxBootstrapIconsModule.pick(allIcons), CommonModule, MatDialogModule, ReactiveFormsModule, MatSliderModule, MatIconModule, MatFormFieldModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule, MatIconModule];

@NgModule({
  imports: [
    ...services,
  ],
  declarations: [...components],
  exports: [...services, ...components]
})
export class SharedModule { }