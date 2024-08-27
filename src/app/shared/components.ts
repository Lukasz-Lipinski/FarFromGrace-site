import { NavbarComponent } from "../components/navbar/navbar.component";
import { ItemCardComponent } from "../components/item-card/item-card.component";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { NavbarLogoComponent } from "../components/navbar-logo/navbar-logo.component";
import { LayoutComponent } from "../components/layout/layout.component";
import { MusicianCardComponent } from "../components/musician-card/musician-card.component";
import { NavbarIconsComponent } from "../components/navbar-icons/navbar-icons.component";
import { MusicianDetailsComponent } from "../components/musician-details/musician-details.component";
import { ContactFromComponent } from "../components/contact-from/contact-from.component";
import { NewsSectionComponent } from "../components/homepage-sections/news-section/news-section.component";
import { IncomingGigsSectionComponent } from "../components/homepage-sections/incoming-gigs-section/incoming-gigs-section.component";
import { IncomingGigItemComponent } from "../components/homepage-sections/incoming-gigs-section/incoming-gig-item/incoming-gig-item.component";
import { ModalComponent } from "../components/modal/modal.component";
import { NavbarMobileComponent } from "../components/navbar/navbar-mobile/navbar-mobile.component";
import { NavbarDesktopComponent } from "../components/navbar/navbar-desktop/navbar-desktop.component";
import { AlbumSectionComponent } from "../components/album-section/album-section.component";
import { AlbumComponent } from "../components/album-section/album/album.component";
import { IsLoadedDirective } from "../directives/isLoaded.directive";
import { ContentLoaderComponent } from "../components/content-loader/content-loader.component";
import { DataBadgeComponent } from "../components/homepage-sections/incoming-gigs-section/data-badge/data-badge.component";
import { FooterComponent } from "../components/footer/footer.component";
import { LanguageTogglerComponent } from "../components/footer/language-toggler/language-toggler.component";

export default [
  NavbarComponent,
  FooterComponent,
  ItemCardComponent,
  AlbumSectionComponent,
  AlbumComponent,
  ContentLoaderComponent,
  DataBadgeComponent,
  SpinnerComponent,
  IncomingGigItemComponent,
  NewsSectionComponent,
  NavbarMobileComponent,
  IsLoadedDirective,
  NavbarDesktopComponent,
  IncomingGigsSectionComponent,
  ModalComponent,
  ContactFromComponent,
  MusicianDetailsComponent,
  NavbarIconsComponent,
  LayoutComponent,
  SidebarComponent,
  NavbarLogoComponent,
  MusicianCardComponent,
  LanguageTogglerComponent,
] as any[];
