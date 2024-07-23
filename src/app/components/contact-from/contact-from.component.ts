import { ChangeDetectionStrategy, Component, Inject, inject, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmailData } from '../../services/content/content.service';
import { ReCaptchaV3Service } from "ng-recaptcha-2";
import { toSignal } from "@angular/core/rxjs-interop";

export interface IContactForm {
  email: FormControl<string>;
  subject: FormControl<string>;
  message: FormControl<string>;
  name: FormControl<string>;
}

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFromComponent {
  readonly sendEmailEmitter = output<IEmailData>();
  private readonly recapchaService = inject(ReCaptchaV3Service);
  private readonly token = toSignal(this.recapchaService.execute('importantAction'));

  private emailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  private contactForm = new FormGroup<IContactForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(this.emailRegexp)
      ]
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    }),
    subject: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
  });
  constructor(@Inject("Environment") private readonly env: any) { }

  public get getSiteKey() {
    return this.env.siteKey;
  }

  get getContactForm() { return this.contactForm; }
  get getFormControls() {
    const controls = Object.keys(this.contactForm.controls);
    return controls;
  }

  setPlaceholder(control: string) {
    return `Please assign ${control}`;
  }

  onSendEmail() {
    const { email, message, subject, name } = this.contactForm.controls;
    const emailToSend: IEmailData = {
      address: email.value,
      text: message.value,
      subject: subject.value,
      name: name.value,
    };
    this.contactForm.valid && this.token() && this.sendEmailEmitter.emit(emailToSend);

  }
  get getToken() {
    return this.token();
  }
  get isFormInvalid() {
    return this.contactForm.invalid;
  }
}

