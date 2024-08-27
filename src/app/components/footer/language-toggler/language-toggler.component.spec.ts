import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LanguageTogglerComponent } from "./language-toggler.component";
import {
  provideExperimentalZonelessChangeDetection,
  signal,
} from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";
import {
  ContentService,
  TypeLang,
} from "../../../services/content/content.service";
import { By } from "@angular/platform-browser";
import { MatButtonToggle } from "@angular/material/button-toggle";
const mockServiceData: TypeLang = "eng";

describe("Testing Language Toggler Component", () => {
  let component: LanguageTogglerComponent;
  let fixture: ComponentFixture<LanguageTogglerComponent>;
  let contentService: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageTogglerComponent],
      imports: [SharedModule],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        {
          provide: ContentService,
          useValue: {
            lang: signal<TypeLang>(mockServiceData),
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LanguageTogglerComponent);
    component = fixture.componentInstance;
    contentService = TestBed.inject(ContentService);
  });

  describe("DOM tests", () => {
    it("should create", () => {
      expect(component).toBeTruthy();
    });
    it("renders toggler with 'eng' and 'pl' labels", () => {
      const togglers = fixture.debugElement.queryAll(
        By.directive(MatButtonToggle)
      );
      const getTogglerButtonTxt = (index: number) =>
        (togglers[index].nativeElement as HTMLButtonElement).textContent;
      expect(togglers.length).toBe(2);
      expect(getTogglerButtonTxt(0)?.trim()).toBe("ENG");
      expect(getTogglerButtonTxt(1)?.trim()).toBe("PL");
    });
  });

  describe("Class tests", () => {
    it("selectedLanguage returns contentService data", () => {
      expect(component.selectedLanguage()).toBe(mockServiceData);
    });
  });
});
