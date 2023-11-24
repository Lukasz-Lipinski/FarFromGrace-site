import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components: any[] = [];
const services: any[] = [CommonModule];

@NgModule({
  imports: [
    ...services
  ],
  declarations: [...components],
  exports: [...services, ...components]
})
export class SharedModule { }
