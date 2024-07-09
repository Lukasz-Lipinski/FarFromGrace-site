import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";
import { RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY } from "ng-recaptcha-2";

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideAnimations(), provideExperimentalZonelessChangeDetection(), provideHttpClient(), {
    provide: "Environment",
    useValue: {
      dbURL: 'https://farfromgrace-site-default-rtdb.europe-west1.firebasedatabase.app/',
      serviceURL: 'https://farfromgrace-service.vercel.app/',
    },
  },
  {
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: '6LefGAsqAAAAAJ-23gnMw0jKKEVBT3k2WZA4NlaT'
  },
  {
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LefGAsqAAAAAJ-23gnMw0jKKEVBT3k2WZA4NlaT',
    },
  },
  ]
};
