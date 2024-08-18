/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, provideExperimentalZonelessChangeDetection } from '@angular/core';

import { ContentLoaderComponent } from './content-loader.component';
import { CommonModule, NgOptimizedImage } from "@angular/common";

describe('Testing ContentLoaderComponent', () => {
  let component: ContentLoaderComponent;
  let fixture: ComponentFixture<ContentLoaderComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ContentLoaderComponent],
      imports: [CommonModule, NgOptimizedImage],
      providers: [provideExperimentalZonelessChangeDetection()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentLoaderComponent);
    component = fixture.componentInstance;
    fixture.changeDetectorRef.markForCheck();
  }));

  describe("DOM tests", () => {
    it("renders img", () => {
      fixture.whenRenderingDone().then(() => {
        const img = fixture.debugElement.query(By.css("img")).nativeElement as HTMLImageElement;
        expect(img).toBeDefined();
      });
    });
  });
  describe("Class tests", () => {
    it("returns img source", () => {
      expect(component.getLoaderSrc).toBe("assets/svg/white.svg");
    });
  });
});
