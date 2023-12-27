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
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { HttpClientModule } from "@angular/common/http";
import { NgOptimizedImage } from "@angular/common";
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
import { ContactFromComponent } from '../components/contact-from/contact-from.component';
import { NewsSectionComponent } from '../components/homepage-sections/news-section/news-section.component';
import { IncomingGigsSectionComponent } from '../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component';
import { IncomingGigItemComponent } from '../components/homepage-sections/incoming-gigs-section/incoming-gig-item/incoming-gig-item.component';

const components: any[] = [NavbarComponent, ItemCardComponent, SpinnerComponent, IncomingGigItemComponent, NewsSectionComponent, IncomingGigsSectionComponent, ContactFromComponent, MusicianDetailsComponent, NavbarIconsComponent, LayoutComponent, SidebarComponent, NavbarLogoComponent, MusicianCardComponent];
const services: any[] = [NgxBootstrapIconsModule.pick(allIcons), MatInputModule, NgOptimizedImage, HttpClientModule, MatExpansionModule, MatListModule, MatDividerModule, CommonModule, MatDialogModule, ReactiveFormsModule, MatSliderModule, MatIconModule, MatFormFieldModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule, MatIconModule];

@NgModule({
  imports: [
    ...services,
  ],
  declarations: [...components],
  exports: [...services, ...components],
})
export class SharedModule { }
