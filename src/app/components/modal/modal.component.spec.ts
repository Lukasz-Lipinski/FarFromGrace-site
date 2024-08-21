import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from "./modal.component";
import { SharedModule } from "../../shared/shared.module";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";

describe('Testing Modal Component', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;

    fixture.componentRef.changeDetectorRef.markForCheck();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('Class tests', () => { });
});