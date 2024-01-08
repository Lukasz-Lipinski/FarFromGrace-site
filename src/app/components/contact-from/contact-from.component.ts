import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmailData } from '../../content/content.service';

interface IContactForm {
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
export class ContactFromComponent implements OnInit {
  emailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
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
  get getContactForm() { return this.contactForm; }
  get getFormControls() {
    const controls = Object.keys(this.contactForm.controls);
    return controls;
  }
  @Output() sendEmailEmitter = new EventEmitter<IEmailData>();

  constructor() { }

  ngOnInit() {
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
    this.contactForm.valid && this.sendEmailEmitter.emit(emailToSend);
  }

  get isFormInvalid() {
    return this.contactForm.invalid;
  }
}

