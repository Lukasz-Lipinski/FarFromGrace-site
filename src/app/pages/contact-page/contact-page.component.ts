import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ContentService, IEmailData } from '../about-page/content/content.service';

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

  onSend(emailData: IEmailData) {
    this.contentService.sendEmail(emailData);
  }
}
