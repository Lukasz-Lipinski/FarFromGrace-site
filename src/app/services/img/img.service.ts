import { ElementRef, Injectable, OnInit, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private images = signal<Set<ElementRef<HTMLImageElement>>>(new Set());
  private imagesAreFullyLoaded = computed(() => {
    let areLoaded = true;
    for (let img of this.images().values()) {
      if (!img.nativeElement.complete) {
        areLoaded = false;
      }
    }
    return areLoaded;
  });

  setFlag(img: ElementRef<HTMLImageElement>) {
    if (this.images().has(img)) {
      this.images().delete(img);
      this.images().add(img);
    } else {
      this.images().add(img);
    }
  }

  checkIfImagesReadyToDispaly = () => this.imagesAreFullyLoaded();

}
