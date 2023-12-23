import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IContactForm {
  email: FormControl<string>;
  subject: FormControl<string>;
  message: FormControl<string>;
}

interface IMessage {
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFromComponent implements OnInit {
  private contactForm = new FormGroup<IContactForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
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
  @Output() sendEmailEmitter = new EventEmitter<IMessage>();

  constructor() { }

  ngOnInit() {
  }

  setPlaceholder(control: string) {
    return `Please assign ${control}`;
  }

  onSendEmail() {
    const { email, message, subject } = this.contactForm.controls;
    const emailToSend: IMessage = {
      email: email.value,
      message: message.value,
      subject: subject.value,
    }
    this.contactForm.valid  && this.sendEmailEmitter.emit(emailToSend);
  }

  get isFormInvalid() {
    return this.contactForm.invalid;
  }
}
