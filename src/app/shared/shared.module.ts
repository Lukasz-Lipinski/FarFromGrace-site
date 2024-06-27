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
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
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
import { ModalComponent } from "../components/modal/modal.component";
import { NavbarMobileComponent } from "../components/navbar/navbar-mobile/navbar-mobile.component";
import { NavbarDesktopComponent } from "../components/navbar/navbar-desktop/navbar-desktop.component";
import { AlbumSectionComponent } from "../components/album-section/album-section.component";
import { AlbumComponent } from "../components/album-section/album/album.component";

const components: any[] = [NavbarComponent, ItemCardComponent, AlbumSectionComponent, AlbumComponent, SpinnerComponent, IncomingGigItemComponent, NewsSectionComponent, NavbarMobileComponent, NavbarDesktopComponent, IncomingGigsSectionComponent, ModalComponent, ContactFromComponent, MusicianDetailsComponent, NavbarIconsComponent, LayoutComponent, SidebarComponent, NavbarLogoComponent, MusicianCardComponent];
const services: any[] = [NgxBootstrapIconsModule.pick(allIcons), MatInputModule, NgOptimizedImage, MatExpansionModule, MatListModule, MatDividerModule, CommonModule, ReactiveFormsModule, MatSliderModule, MatIconModule, MatFormFieldModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule, MatIconModule];

@NgModule({
  imports: [
    ...services,
  ],
  declarations: [...components],
  exports: [...services, ...components],
})
export class SharedModule { }
