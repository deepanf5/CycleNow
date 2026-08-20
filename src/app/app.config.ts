import { provideHttpClient } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideIcons } from '@ng-icons/core';
import {
  lucideEye,
  lucideEyeOff,
  lucideArrowRight,
  lucideChevronUp,
  lucideChevronRight,
  lucideBike,
  lucideRouteOff,
  lucideSpotlight,
  lucideWrench,
  lucideWind,
  lucideSignpost,
} from '@ng-icons/lucide';
import { provideSpartanHlm } from '@spartan-ng/helm/utils';
import { Auth } from './services/auth/auth';

export function initializeAuth() {
  const authServices = inject(Auth);
  return authServices.checkToken();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideSpartanHlm(),
    provideIcons({
      lucideEye,
      lucideEyeOff,
      lucideArrowRight,
      lucideChevronUp,
      lucideChevronRight,
      lucideBike,
      lucideRouteOff,
      lucideSpotlight,
      lucideWrench,
      lucideWind,
      lucideSignpost,
    }),
    provideAppInitializer(initializeAuth),
  ],
};
