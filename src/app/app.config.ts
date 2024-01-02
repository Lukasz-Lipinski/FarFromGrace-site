import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(), {
    provide: "Environment",
    useValue: {
      dbURL: 'https://farfromgrace-site-default-rtdb.europe-west1.firebasedatabase.app/',
      serviceURL: 'https://farfromgrace-service.vercel.app/',
    }
  }]
};
