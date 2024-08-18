/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItemCardComponent } from './item-card.component';
import { SharedModule } from "../../shared/shared.module";
import { MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { Category } from "./IMerch";

const mockName = "mockName";
const mockPrice = 2;
const mockImg = "mockImg";
const mockDescription = "mockDescription";
const mockCategory = Category[Category.Hoodie];

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ItemCardComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("setName", mockName);
    fixture.componentRef.setInput("setPrice", mockPrice);
    fixture.componentRef.setInput("setImg", mockImg);
    fixture.componentRef.setInput("setDescription", mockDescription);
    fixture.componentRef.setInput("setCategory", mockCategory);
    fixture.detectChanges();
  }));

  describe("DOM test", () => {
    it("renders header with name and price", () => {
      const header = fixture.debugElement.query(By.directive(MatCardHeader));
      const title = header.query(By.directive(MatCardTitle)).nativeElement as HTMLElement;
      const subtitle = header.query(By.directive(MatCardSubtitle)).nativeElement as HTMLElement;

      expect(header.nativeElement).toBeDefined();
      expect(title.textContent?.trim()).toBe(component.getName);
      expect(subtitle.textContent?.trim()).toContain(String(component.getPrice));
    });
    it("renders img", () => {
      const img = fixture.debugElement.query(By.css("img")).nativeElement as HTMLDivElement;

      expect(img).toBeDefined();
    });
    it("renders category with mock value equals 'Hoodie'", () => {
      const categoryElement = fixture.debugElement.query(By.directive(MatCardContent)).nativeElement as HTMLElement;

      expect(categoryElement).toBeDefined();
      expect(categoryElement.textContent?.trim()).toBe(mockCategory);
    });
    it("renders button 'buy' with accent color", () => {
      const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;

      expect(button).toBeDefined();
      expect(button.getAttribute("color")).toBe("accent");
    });
  });
  describe("Class tests", () => {
    it("getName returns mock value as mockName", () => {
      expect(component.getName).toBe(mockName);
    });
    it("getPrice returns 2", () => {
      expect(component.getPrice).toBe(mockPrice);
    });
    it("setImg return mockImg value", () => {
      expect(component.getImg).toBe(mockImg);
    });
    it("setDescription return mockImg value", () => {
      expect(component.getDesctiption).toBe(mockDescription);
    });
    it("setDescription return mockImg value", () => {
      expect(component.getDesctiption).toBe(mockDescription);
    });
    it("setCategory return mockCategory value", () => {
      expect(component.getCategory).toBe(mockCategory);
    });
  });
});
