import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

type Role = "Bassist" | "Guitarist" | "Drummer" | "Vocalist/Guitarist";

interface IMusican {
  name: string;
  nick: string;
  surname: string;
  role: Role;
  img: string;
  imgPosition: "left" | "right";
  description: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private musicians = signal<IMusican[]>([
    {
      name: "Łukasz",
      nick: "Wookie",
      surname: "Lipiński",
      role: 'Vocalist/Guitarist',
      description: [
        "The best growler in the World! His guttural sounds as deepest helish fart!",
        "Always annoyed guy that often has a problem with something!",
        "He plays on the rythm guitar and is one of FFG founders!"
      ],
      img: "img",
      imgPosition: 'left'
    },
    {
      name: "Jasiek",
      nick: "Januszek",
      surname: "Pieszczoch",
      role: 'Guitarist',
      description: [
        "Extra the best guitarist in the World! He is fan of tapping and leads lines!.",
        "A technical brain of FFG and is one of FFG founders as Wookie!",
        "He likes watching Kapitan Bomba as fuck and has a pug named 'Winston' as Parkway Drive vocalist!"
      ],
      img: "img",
      imgPosition: 'right'
    },
    {
      name: "Konrad",
      nick: "KondziQ",
      surname: "Kochutek",
      role: 'Bassist',
      description: [
        "Extra the best bassist in the world! He plays using pick but sounds like a figner.",
        "Fan of sports especially gym! Yeah it's true his farts has extra proteins and called as 'anabolic fart'",
      ],
      img: "img",
      imgPosition: 'left'
    },
    {
      name: "Paweł",
      nick: "Pablo",
      surname: "Kardis",
      role: 'Drummer',
      description: [
        "Extra the best drummer in the world! He plays using especially designed drumsticks!",
        "Fan of heavy metal, he likes groove and fat riffs as fuck!",
      ],
      img: "img",
      imgPosition: 'right'
    }
  ])

constructor() { }

getMusiciansInfo() {
  return this.musicians();
}

}
