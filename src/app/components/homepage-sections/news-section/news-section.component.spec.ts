import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsSectionComponent } from "./news-section.component";
import { SharedModule } from "../../../shared/shared.module";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { By } from "@angular/platform-browser";

const mockNews: string[] = [
  "news 1",
  "news 2",
  "news 3",
];

describe('Testing NewSection Component', () => {
  let component: NewsSectionComponent;
  let fixture: ComponentFixture<NewsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSectionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("SetNews", mockNews);
    fixture.detectChanges();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("renders header with title", () => {
      const header = fixture.debugElement.query(By.css("h2")).nativeElement as HTMLHeadingElement;

      expect(header.textContent).toContain("NEWS");
    });
    it("renders 3 mocked news", () => {
      const news = fixture.debugElement.queryAll(By.css("p"));

      expect(news.length).toBe(mockNews.length);
      for (let p of news) {
        const element = p.nativeElement as HTMLParagraphElement;
        expect(mockNews.includes(element.textContent?.trim()!)).toBeTrue();
      }
    });
  });
  describe('Class tests', () => {
    it("should return news", () => {
      expect(component.getNews).toEqual(mockNews);
    });
    it("returns the same number of news as mock", () => {
      expect(component.getNews.length).toBe(mockNews.length);
    });
  });
});