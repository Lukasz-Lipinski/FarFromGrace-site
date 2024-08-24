import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicianCardComponent } from "./musician-card.component";
import { SharedModule } from "../../shared/shared.module";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { IEquipmentItem, IMusican, Role } from "../../services/content/content.service";
import { By } from "@angular/platform-browser";

//MOCKS
const mockName = "mock name";
const mockSurname = "mock surname";
const mockNick = "mock nick";
const mockImageMain = "mock_image_main";
const mockImageAvatar = "mock_image_avatar";
const mockRole: Role = "Bassist";
const mockPosition: "left" | "right" = "left";
const mockDescription: string[] = ["mock description"];
const mockEquipment: IEquipmentItem[] = [{
  header: "Amp Modelers",
  list: ["mock list"]
}];
const mockInstagram = "mock instagram";

const mockMusicianData: IMusican = {
  name: mockName,
  description: mockDescription,
  equipment: mockEquipment,
  imgAvatar: mockImageAvatar,
  imgMain: mockImageMain,
  imgPosition: mockPosition,
  instagram: mockInstagram,
  nick: mockNick,
  role: mockRole,
  surname: mockSurname
};

describe('Testing Musician Card Component', () => {
  let component: MusicianCardComponent;
  let fixture: ComponentFixture<MusicianCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicianCardComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(MusicianCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput("SetName", mockName);
    fixture.componentRef.setInput("SetSurname", mockSurname);
    fixture.componentRef.setInput("SetNick", mockNick);
    fixture.componentRef.setInput("SetImageMain", mockImageMain);
    fixture.componentRef.setInput("SetImageAvatar", mockImageAvatar);
    fixture.componentRef.setInput("SetRole", mockRole);
    fixture.componentRef.setInput("SetImgPosition", mockPosition);
    fixture.componentRef.setInput("SetDescription", mockDescription);
    fixture.componentRef.setInput("SetEquipment", mockEquipment);
    fixture.componentRef.setInput("SetInstagram", mockInstagram);
    fixture.detectChanges();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("renders image with GetImageMain source and alt as GetNick", () => {
      const img = fixture.debugElement.query(By.css("img")).nativeElement as HTMLImageElement;

      expect(img).toBeDefined();
      expect(img.alt).toBe(component.GetNick);
      expect(img.src).toContain(mockImageMain);
    });
  });
  describe('Class tests', () => {
    it("returns set name", () => {
      expect(component.GetName).toBe(mockName);
    });
    it("returns set surnname", () => {
      expect(component.GetSurname).toBe(mockSurname);
    });
    it("returns set nick", () => {
      expect(component.GetNick).toBe(mockNick);
    });
    it("returns set image main", () => {
      expect(component.GetImageMain).toBe(mockImageMain);
    });
    it("returns set image avatar", () => {
      expect(component.GetImageAvatar).toBe(mockImageAvatar);
    });
    it("returns set role", () => {
      expect(component.GetRole).toBe(mockRole);
    });
    it("returns set image position", () => {
      expect(component.GetImgPosition).toBe(mockPosition);
    });
    it("returns set description", () => {
      expect(component.GetDescription).toBe(mockDescription);
    });
    it("returns set equipment", () => {
      expect(component.GetEquipment).toEqual(mockEquipment);
    });
    it("returns set instagram", () => {
      expect(component.GetInstagram).toBe(mockInstagram);
    });
    it("showDetails emits value with mocked inputs", () => {
      const spyOnShowDetails = spyOn(component.musicianDataEmitter, "emit");

      component.showDetails();
      expect(spyOnShowDetails).toHaveBeenCalledWith(mockMusicianData);
    });
  });
});
