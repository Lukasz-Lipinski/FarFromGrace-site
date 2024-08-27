import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { NgOptimizedImage } from "@angular/common";
import { NgxBootstrapIconsModule, allIcons } from "ngx-bootstrap-icons";

import {
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaV3Module,
} from "ng-recaptcha-2";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

export default [
  NgxBootstrapIconsModule.pick(allIcons),
  MatInputModule,
  NgOptimizedImage,
  MatExpansionModule,
  MatListModule,
  RecaptchaModule,
  RecaptchaFormsModule,
  RecaptchaV3Module,
  MatDividerModule,
  CommonModule,
  ReactiveFormsModule,
  MatSliderModule,
  MatIconModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  RouterModule,
  MatIconModule,
  MatButtonToggleModule,
] as any[];
