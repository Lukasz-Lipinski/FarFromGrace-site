import { FormGroup } from "@angular/forms";
import { IContactForm } from '../components/contact-from/contact-from.component';

const contactFormDataForEmitter = {
  email: "testaddress@test.com",
  name: "test-name",
  subject: "test-subject",
  message: "test-text"
}

const getMockForForm = (controlName: string ) => {
    switch(controlName) {
      case 'email':
      return contactFormDataForEmitter.email;
      case 'name':
      return contactFormDataForEmitter.name;
      case 'subject':
      return contactFormDataForEmitter.subject;
      case 'message':
      return contactFormDataForEmitter.message;
      default:
      return '';
    }
 }

export const setContactFormFields = (form: FormGroup<IContactForm>) => {
  for (let control in form.controls) {
    form.controls[control as keyof IContactForm].setValue(getMockForForm(control));
    form.controls[control as keyof IContactForm].markAsDirty();
    form.controls[control as keyof IContactForm].markAsTouched();
    form.controls[control as keyof IContactForm].updateValueAndValidity();
  };
 }
