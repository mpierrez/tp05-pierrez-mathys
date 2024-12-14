import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { NgxsModule } from '@ngxs/store';
import { routes } from './app.routes';
import { CakeState } from './app/shared/states/cake.state';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot([CakeState])),
    provideHttpClient()
  ],
};
