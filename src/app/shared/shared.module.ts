import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MatButtonModule } from "@angular/material/button";

const components: any[] = [NavbarComponent];
const services: any[] = [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule];

@NgModule({
  imports: [
    ...services,
  ],
  declarations: [...components],
  exports: [...services, ...components]
})
export class SharedModule { }
