/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFromComponent, IContactForm } from './contact-from.component';
import { SharedModule } from '../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitter } from '@angular/core';
import { contactFormDataForEmitter } from '../../stubs/forms';

describe('ContactFromComponent', () => {
  let component: ContactFromComponent;
  let fixture: ComponentFixture<ContactFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFromComponent ],
      imports: [SharedModule, BrowserAnimationsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ContactFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Class tests", () => {
    it("getContactForm returns created form", () => {
      expect(component.getContactForm).toBeInstanceOf(FormGroup);
     })

     it("getFormControl returns array including 4 controls name", () => {
      const names = component.getFormControls;
      for (let name of names) {
        expect(name).toBeInstanceOf(String)
      }
      expect(names.length).toEqual(4);
      })

      it("sendEmailEmitter emits object inherited IEmailData", () => {
        const spyOnEmialEmitter = spyOn(new EventEmitter(), "emit");

        for (let control of component.getFormControls) {
          const ctrl = component.getContactForm.controls[control as keyof IContactForm];
          console.log(ctrl);
          ctrl.markAsDirty;
          ctrl.markAsTouched;
          ctrl.setValue("tes@test.com");
        }

        component.onSendEmail();

        expect(spyOnEmialEmitter).toHaveBeenCalledTimes(1);
       })
   })

  describe("DOM tests", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
   });
});
