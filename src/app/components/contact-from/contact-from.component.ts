import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IContactForm {
  email: FormControl<string>;
  subcject: FormControl<string>;
  message: FormControl<string>;
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
    }),
    subcject: new FormControl('', {
      nonNullable: true,
    }),
    message: new FormControl('', {
      nonNullable: true,
    }),
  });
  get getContactForm() { return this.contactForm; }
  get getFormControls() {
    const controls = Object.keys(this.contactForm.controls);
    return controls;
  }
  constructor() { }

  ngOnInit() {
  }

  setPlaceholder(control: string) {
    return `Please assign ${control}`;
  }

}
