import { ElementRef, Injectable, OnInit, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private aboutPageImages = signal<Set<ElementRef<HTMLImageElement>>>(new Set());
  private aboutPagesImagesLoaded = computed(() => {
    let areLoaded = true;
    for (let img of this.aboutPageImages().values()) {
      if (!img.nativeElement.complete) {
        areLoaded = false;
      }
    }
    return areLoaded;
  });

  setFlagForAboutPage(img: ElementRef<HTMLImageElement>) {
    if (this.aboutPageImages().has(img)) {
      this.aboutPageImages().delete(img);
      this.aboutPageImages().add(img);
    } else {
      this.aboutPageImages().add(img);
    }
  }

  checkIfImagesReadyToDispaly = () => this.aboutPagesImagesLoaded();

}
