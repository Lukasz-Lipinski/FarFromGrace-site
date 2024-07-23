import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumSectionComponent, IAlbum } from './album-section.component';
import { SharedModule } from "../../shared/shared.module";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AlbumComponent } from "./album/album.component";

const mockedAlbums: IAlbum[] = [
  {
    title: "mocked album 1",
    img: "mocked album 1 img",
    description: ["mocked album 1 description 1", "mocked album 1 description 2"],
    links: [{
      href: "mocked album 1 link",
      label: "mocked album 1 link"
    }]
  },
  {
    title: "mocked album 2",
    img: "mocked album 2 img",
    description: ["mocked album 2 description 2", "mocked album 2 description 2"],
    links: [{
      href: "mocked album 2 link",
      label: "mocked album 2 link"
    }]
  },
];

describe('Testing AlbumSection Component', () => {
  let component: AlbumSectionComponent;
  let fixture: ComponentFixture<AlbumSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(AlbumSectionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("albums", mockedAlbums);
    fixture.changeDetectorRef.markForCheck();
  });

  describe('DOM tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it("Should render list of albums", () => {
      const list = fixture.debugElement.query(By.css('ul'));

      expect(list).toBeTruthy();
    });
    it("Should render amount of albums equals amount of mocked albums", () => {
      const renderedAlbums = fixture.debugElement.queryAll(By.directive(AlbumComponent));

      fixture
        .whenRenderingDone()
        .then(() => {
          expect(renderedAlbums.length).toBe(mockedAlbums.length);
        });
    });
  });
  describe('Class tests', () => {
    it("Should return mocked albums", () => {
      expect(component.getAlbums.length).toBe(mockedAlbums.length);
      expect(component.getAlbums).toBeInstanceOf(Array<IAlbum>);
    });
    it("Each of album should be equaled to mocked albums", () => {
      const albums = component.getAlbums;

      for (let i = 0; i < mockedAlbums.length; i++) {
        expect(albums[i]).toEqual(mockedAlbums[i]);
      }
    });
  });
});
