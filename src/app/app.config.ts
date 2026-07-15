import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core'; // 1. Importa questo!
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { VideogiocoService } from './shared/services/app.services';

export const appConfig: ApplicationConfig = {
  providers: [
    // 2. Sostituisci provideZoneChangeDetection con questo:
    provideZonelessChangeDetection(), 
    
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    VideogiocoService    
  ]
};