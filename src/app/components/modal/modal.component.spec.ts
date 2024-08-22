import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from "./modal.component";
import { SharedModule } from "../../shared/shared.module";
import { NO_ERRORS_SCHEMA, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { IMusican } from "../../services/content/content.service";
import { By } from "@angular/platform-browser";

const mockMusician: IMusican = {
  surname: "mock surname",
  description: ["mockDescription"],
  equipment: [{
    header: "Drums",
    list: ["mocked list"]
  }],
  imgAvatar: "mock avatar",
  imgMain: "mock main",
  imgPosition: "left",
  instagram: "mock instagram",
  name: "mock name",
  nick: "mock nick",
  role: "Drummer"
};

describe('Testing Modal Component', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [SharedModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("selectedMusician", mockMusician);
    fixture.detectChanges();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("renders full name", () => {
      const fullname = fixture.debugElement.query(By.css("h2")).nativeElement as HTMLHeadingElement;

      expect(fullname.textContent).toContain(component.getFullname);
    });
    it("renders modal content", () => {
      const modalContent = fixture.debugElement.query(By.css("div.modal-container-content")).nativeElement as HTMLDivElement;

      expect(modalContent.children).toBeDefined();
    });
  });
  describe('Class tests', () => {
    it("returns selected musician", () => {
      expect(component.getMusician).toEqual(mockMusician);
    });
    it("returns full name", () => {
      const fullname = `${mockMusician.name} ${mockMusician.surname}`;
      expect(component.getFullname).toBe(fullname);
    });
    it("isShown returns true if musician is selected", () => {
      expect(component.getIsShown).toBeTruthy();
    });
    it("isShown returns false if musician is unselected", () => {
      fixture.componentRef.setInput("selectedMusician", null);
      expect(component.getIsShown).toBeFalse();
    });
    it("onClose emits void and close modal", () => {
      const spyOnUnSelectMusician = spyOn(component.unselectMusician, "emit").and.callFake(() => {
        fixture.componentRef.setInput("selectedMusician", null);
      });

      expect(component.getIsShown).toBeTrue();
      component.onClose();

      expect(spyOnUnSelectMusician).toHaveBeenCalledTimes(1);
      expect(component.getIsShown).toBeFalse();
    });
    it("onBlockClosing stop propagation", () => {
      const spyOnOnBlockClosing = spyOn(component, "onBlockClosing");
      component.onBlockClosing(new MouseEvent("click"));
      expect(spyOnOnBlockClosing).toHaveBeenCalledTimes(1);
    });
  });
});