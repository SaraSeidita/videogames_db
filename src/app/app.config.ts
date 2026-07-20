import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { VideogiocoService } from './shared/services/app.services';
import { BaseURLIInterceptor } from './shared/interceptor/baseUrl.interceptor';

export const appConfig: ApplicationConfig = { // 👈 Rimosso l'underscore qui
  providers: [
    // Attiva il rilevamento dei cambiamenti zoneless (Angular 21+)
    provideZonelessChangeDetection(), 
    
    // Configurazione del Router con binding automatico dei parametri URL ai componenti
    provideRouter(
      routes, 
      withComponentInputBinding() 
    ),

    // Configurazione dell'HTTP Client globale con l'interceptor per il BaseURL
    provideHttpClient(
      withInterceptors([BaseURLIInterceptor]) 
    ),

    // Registrazione del servizio core
    VideogiocoService    
  ]
};