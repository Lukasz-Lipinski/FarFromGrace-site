import { ComponentFixture, DeferBlockBehavior, DeferBlockFixture, DeferBlockState, TestBed } from '@angular/core/testing';
import { AlbumComponent } from "./album.component";
import { ILink } from "../../navbar/navbar.component";
import { NO_ERRORS_SCHEMA, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { By } from "@angular/platform-browser";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SharedModule } from "../../../shared/shared.module";

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
  let deferFixtures: DeferBlockFixture[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      imports: [SharedModule, NgOptimizedImage],
      providers: [provideExperimentalZonelessChangeDetection()],
      schemas: [NO_ERRORS_SCHEMA],
      deferBlockBehavior: DeferBlockBehavior.Manual
    }).compileComponents();
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput("setTitle", mockedTitle);
    fixture.componentRef.setInput("setImg", mockedImg);
    fixture.componentRef.setInput("setLinks", mockedLinks);
    fixture.componentRef.setInput("setDescription", mockedDescription);
    deferFixtures = await fixture.getDeferBlocks();

    fixture.changeDetectorRef.markForCheck();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("Should render title", async () => {
      await deferFixtures[0].render(DeferBlockState.Complete);

      const header = fixture.debugElement.query(By.css("h2")).nativeElement as HTMLHeadingElement;

      expect(header).toBeTruthy();
      expect(header.textContent).toBe(component.getTitle);

    });
    it("Should render img", async () => {
      await deferFixtures[0].render(DeferBlockState.Complete);
      fixture.detectChanges();

      const img = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;

      fixture
        .whenRenderingDone()
        .then(() => {
          expect(img).toBeTruthy();
          expect(img.alt).toBe(component.getTitle);
          expect(img.src).toContain(component.getImg);
        });
    });
    it("Should render description", async () => {
      await deferFixtures[0].render(DeferBlockState.Complete);

      const descriptions = fixture.debugElement.queryAll(By.css('p'));

      fixture.whenRenderingDone().then(
        () => {
          expect(descriptions.length).toBe(2);
          for (let i = 0; i < descriptions.length; i++) {
            const descriptionHTML = descriptions[i].nativeElement as HTMLParagraphElement;
            expect(descriptionHTML.textContent!).toContain(component.getDescription[i]);
          }
        }
      );
    });
    it("Should render links", async () => {
      await deferFixtures[0].render(DeferBlockState.Complete);

      const links = fixture.debugElement.queryAll(By.css("a[mat-flat-button]"));

      fixture.whenRenderingDone().then(
        () => {
          expect(links.length).toBe(mockedLinks.length);

          for (let i = 0; i < mockedLinks.length; i++) {
            const linkTag = links[i].nativeElement as HTMLLinkElement;
            expect(linkTag.href).toContain(mockedLinks[i].href);
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
