/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe("DOM Tests", () => {
    it("renders img", () => {
      const img = fixture.debugElement.query(By.css("img")).nativeElement as HTMLImageElement;
      expect(img.src).not.toBeNull();
    });
    it("renders div", () => {
      const modal = fixture.debugElement.query(By.css("div")).nativeElement as HTMLDivElement;
      expect(modal.tagName).toEqual('DIV');
    });
    it("returns div with class named 'modal'", () => {
      const modal = fixture.debugElement.query(By.css("div")).nativeElement as HTMLDivElement;
      expect(modal).toHaveClass("modal");
    });
  });
  describe("Class Tests", () => {
    it("returns path for img", () => {
      expect(component.getPath).toEqual("../../../assets/svg/logo/white.svg");
    });
  });
});
