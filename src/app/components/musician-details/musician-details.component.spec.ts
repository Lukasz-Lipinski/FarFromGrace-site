import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicianDetailsComponent } from './musician-details.component';
import { MusicianCardComponent } from '../musician-card/musician-card.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMusican } from '../../content/content.service';

describe('Testing Musician Details Component', () => {
  let component: MusicianDetailsComponent;
  let fixture: ComponentFixture<MusicianDetailsComponent>;

  //mock data using IMusician
  const mockData: IMusican = {
    name: "test-name",
    description: ["test-description"],
    imgAvatar: "imgAvatar-test",
    equipment: [{
      header: "Amps",
      list: [
        "amps-test"
      ]
    }],
    imgMain: "mainimg-test",
    imgPosition: "left",
    nick: "nick-test",
    role: "Bassist",
    surname: "surname-test",
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicianDetailsComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockData
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicianDetailsComponent);
    component = fixture.componentInstance;
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Class tests', () => {
    it("return musician data", () => {
      const componentMusicanData = Object.values(component.getData);
      const mockMusicanData = Object.values(mockData);

      for (const prop of componentMusicanData) {
        expect(mockMusicanData.includes(prop)).toBeTrue();
      }
    });
  });

});
