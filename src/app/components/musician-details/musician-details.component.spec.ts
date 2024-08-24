import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicianDetailsComponent } from "./musician-details.component";
import { SharedModule } from "../../shared/shared.module";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import musiciansData from "../../stubs/musiciansData";
import { By } from "@angular/platform-browser";

describe('Testing MusicianDetails component', () => {
  let component: MusicianDetailsComponent;
  let fixture: ComponentFixture<MusicianDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicianDetailsComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(MusicianDetailsComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput("musicianDetails", musiciansData[0]);
    fixture.detectChanges();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("renders description", () => {
      const desc = fixture.debugElement.query(By.css("p")).nativeElement as HTMLParagraphElement;

      expect(desc).toBeDefined();
      expect(desc.textContent).toContain(component.getMusicianDetails.description);
    });
    it("renders link to instagram", () => {
      const link = fixture.debugElement.query(By.css("a")).nativeElement as HTMLLinkElement;

      expect(link.href).toContain(component.getMusicianDetails.instagram);
      expect(link.querySelector("i-bs")).toBeDefined();
    });
  });

  describe('Class tests', () => {
    it("ngOnDestroy restars onscroll reference", () => {
      expect(component.getMusicianDetails).toEqual(musiciansData[0]);
    });
  });
});
