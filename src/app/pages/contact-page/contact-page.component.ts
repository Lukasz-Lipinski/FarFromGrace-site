import { ChangeDetectionStrategy, Component, EnvironmentInjector, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ContentService, IEmailData } from '../../services/content/content.service';
import { IconNamesEnum } from "ngx-bootstrap-icons";
import { ILinkWithIcon } from '../../components/navbar-icons/navbar-icons.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module, ReCaptchaV3Service } from "ng-recaptcha";

interface IContactLink extends ILinkWithIcon {
  label: string;
};

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, SharedModule, RecaptchaModule, RecaptchaFormsModule, RecaptchaV3Module,],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  private readonly contentService = inject(ContentService);
  private readonly recapchaService = inject(ReCaptchaV3Service);

  constructor(@Inject("Environment") private readonly env: any) { }

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

  public get getSiteKey() {
    return this.env.siteKey;
  }

  onSend(emailData: IEmailData) {
    this.contentService.sendEmail(emailData);
    this.recapchaService.execute('importantAction').subscribe({
      next: (token) => {
        console.log(token);
      }
    });
  }
}
