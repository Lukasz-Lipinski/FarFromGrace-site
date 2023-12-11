/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { ContentService, IMusican } from './content.service';
import { delay, of } from 'rxjs';
import { signal } from '@angular/core';

describe('Service: Content', () => {
  let service: ContentService;
  const mockedData = signal([
    {
      name: "test name",
      role: "Guitarist",
      description: ["test description"],
      imgPosition: "left",
      img: "test img",
      nick: "test nick",
      surname: "test surname"
    }
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: ContentService,
        useValue: {
          getMusiciansInfo: () => of(mockedData()).pipe(delay(100));
        }
      }]
    }).compileComponents();

    service = TestBed.inject(ContentService);
  });

  describe("Class tests", () => {
    it('be rendered', () => {
      expect(service).toBeTruthy();
    });
    it("returns data for component", (done: DoneFn) => {
      service.getMusiciansInfo().subscribe((data) => {
        expect(data).toBeInstanceOf(mockedData);
        done();
      })
    })
  });
});
