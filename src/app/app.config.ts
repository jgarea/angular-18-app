import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';

function apiServiceConfig(http: HttpClient) {
  return new ApiService(http);
}

export const API_TOKEN=new InjectionToken('API_TOKEN');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      useFactory: apiServiceConfig,
      provide: API_TOKEN,
      deps:[HttpClient]
    }
  ]
};
