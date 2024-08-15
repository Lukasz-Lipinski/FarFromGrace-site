import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { ImgService } from "../services/img/img.service";

@Directive({
  selector: 'img[IsLoaded]',
})
export class IsLoadedDirective {
  private imgService = inject(ImgService);
  constructor(private imgRef: ElementRef<HTMLImageElement>) { }

  @HostListener('load')
  checkIfLoaded() {
    this.imgService.setFlag(this.imgRef);
  }

}
