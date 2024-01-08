import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ContentService, IEmailData } from '../../content/content.service';
import { IconNamesEnum } from "ngx-bootstrap-icons";
import { ILinkWithIcon } from '../../components/navbar-icons/navbar-icons.component';

interface IContactLink extends ILinkWithIcon {
  label: string;
};

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  private contentService = inject(ContentService);
  private links: IContactLink[] = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/ffgmetalcore",
      name: IconNamesEnum.Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/farfromgrace_official",
      name: IconNamesEnum.Instagram,
    },
  ];

  public get getLinks() {
    return this.links;
  }

  onSend(emailData: IEmailData) {
    this.contentService.sendEmail(emailData);
  }
}
