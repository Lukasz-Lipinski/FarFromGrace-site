/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFromComponent } from './contact-from.component';
import { SharedModule } from '../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { setContactFormFields } from '../../stubs/forms';
import { By } from '@angular/platform-browser';

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
        const spyOnEmialEmitter = spyOn(component.sendEmailEmitter, 'emit');

        setContactFormFields(component.getContactForm);

        component.onSendEmail();

        expect(component.isFormInvalid).toBeFalse();
        expect(spyOnEmialEmitter).toHaveBeenCalledTimes(1);
       })

       it("setPlaceholder returns 'Please assign' + controlName", () => {
        const placeholder = (controlName: string) => `Please assign ${controlName}`;

        for (let control in component.getContactForm.controls) {
          expect(component.setPlaceholder(control)).toEqual(placeholder(control));
        }
        });

        it("isFormInvalid returns false as default value", () => {
          expect(component.isFormInvalid).toBeFalse();
         })
         it("isFormInvalid returns true when form is invalid", () => {
          setContactFormFields(component.getContactForm);
          component.onSendEmail();
          expect(component.isFormInvalid).toBeTrue();
         }
        );

        describe("DOM tests", () => {
          it('should create', () => {
            expect(component).toBeTruthy();
          });

          it('should renders 4 fields', () => {
            expect(component.getFormControls.length).toEqual(4);
           });

           describe("Checking submit button", () => {

             it("should renders submit button that is disabled", () => {
              const btn = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement as HTMLButtonElement;

              expect(btn).toBeDefined();
              expect(btn.disabled).toBeTrue();
              })

              it("should turn on button when form is valid", () => {
                setContactFormFields(component.getContactForm);
                const btn = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement as HTMLButtonElement;

                fixture.detectChanges();
                expect(btn.disabled).toBeFalse();
               })
            }
           )

         });
   });
  });
