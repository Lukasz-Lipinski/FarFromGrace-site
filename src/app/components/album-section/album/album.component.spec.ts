import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumComponent } from "./album.component";
import { SharedModule } from "../../../shared/shared.module";
import { ILink } from "../../navbar/navbar.component";
import { provideExperimentalZonelessChangeDetection, provideZoneChangeDetection, signal, ɵwhenStable } from '@angular/core';
import { By } from "@angular/platform-browser";

//mocks
const mockedImg = 'test-src-img';
const mockedTitle = "test-title";
const mockedDescription = [
  "test description for mocked img",
  "test description 2"
];
const mockedLinks: ILink[] = [
  { href: "test-href", label: "test-label" }
];

type checkPropFun<T> = (component: T, property: string, requiredValue: any) => void;

const checkProps: checkPropFun<AlbumComponent> = (component, property, requiredValue) => {
  const { [property as keyof AlbumComponent]: prop } = component;
  expect(prop).toEqual(requiredValue);
};

describe('Testing Album Component', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput("setTitle", mockedTitle);
    fixture.componentRef.setInput("setImg", mockedImg);
    fixture.componentRef.setInput("setLinks", mockedLinks);
    fixture.componentRef.setInput("setDescription", mockedDescription);
    fixture.changeDetectorRef.markForCheck();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("Should render title", () => {
      const header = fixture.debugElement.query(By.css("h2")).nativeElement as HTMLHeadingElement;

      fixture
        .whenRenderingDone()
        .then(
          () => {
            expect(header).toBeTruthy();
            expect(header.textContent).toBe(component.getTitle);
          }
        );
    });
    it("Should render img", () => {
      const img = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;

      fixture
        .whenRenderingDone()
        .then(() => {
          expect(img).toBeTruthy();
          expect(img.alt).toBe(component.getTitle);
          expect(img.src).toBe(component.getImg);
        });
    });
    it("Should render description", () => {
      const descriptions = fixture.debugElement.queryAll(By.css('p'));

      fixture.whenRenderingDone().then(
        () => {
          expect(descriptions.length).toBe(2);
          for (let desc of descriptions) {
            const descriptionHTML = desc.nativeElement as HTMLParagraphElement;
            expect(component.getDescription.includes(descriptionHTML.textContent!)).toBeTrue();
          }
        }
      );
    });
    it("Should render links", () => {
      const links = fixture.debugElement.queryAll(By.css("a[mat-button]"));

      fixture.whenRenderingDone().then(
        () => {
          expect(links.length).toBe(mockedLinks.length);

          for (let i = 0; i < mockedLinks.length; i++) {
            const linkTag = links[i].nativeElement as HTMLLinkElement;
            expect(linkTag.href).toBe(mockedLinks[i].href);
            expect(linkTag.textContent).toBe(mockedLinks[i].label);
          }
        }
      );
    });
  });
  describe('Class tests', () => {
    it("Should return passed mockedTitle", () => {
      checkProps(component, "getTitle", mockedTitle);
    });
    it("Should return passed img", () => {
      checkProps(component, "getImg", `assets/discography/${mockedImg}`);
    });
    it("Should return passed description", () => {
      checkProps(component, "getDescription", mockedDescription);
    });
    it("Should return passed links", () => {
      expect(component.getLinks.length).toBe(mockedLinks.length);
      expect(component.getLinks).toBeInstanceOf(Array<ILink>);
      for (let i = 0; i < mockedLinks.length; i++) {
        expect(component.getLinks[i].href).toBe(mockedLinks[i].href);
        expect(component.getLinks[i].label).toBe(mockedLinks[i].label);
      }
    });
  });
});