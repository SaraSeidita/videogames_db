import { inject } from '@angular/core';
import { signalStore, withState, withMethods, withHooks, patchState } from '@ngrx/signals';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { VideogiocoListModel } from '../../../shared/models/record';
import { VideogiochiInitialState } from './videogioco.slice';

// modello per la lista dei videogiochi


// Creazione del Signal Store per la gestione dello stato della lista dei videogiochi

export const VideogiochiStore = signalStore(
  { providedIn: 'root' }, // Il Signal Store è fornito a livello di root, quindi disponibile in tutta l'applicazione
  withState(VideogiochiInitialState), // Stato iniziale del Signal Store
  withMethods((store, http = inject(HttpClient)) => ({
    async caricaVideogiochi() {
      patchState(store, { loading: true, error: null });
      try {
        // Chiamata al tuo controller .NET (aggiorna l'URL con il tuo)
        const response = await firstValueFrom(
          http.get<{ success: boolean; data: VideogiocoListModel[] }>(
            `${environment.API_BASE_URL}/Videogioco/ListaVideogiochi`,
          ),
        );

        if (response.success) {
          patchState(store, { lista: response.data, loading: false });
        } else {
          patchState(store, { error: 'Errore nel recupero dati', loading: false });
        }
      } catch (err: any) {
        patchState(store, { error: err.message || 'Errore di rete', loading: false });
      }
    },
  })),
  withHooks({
    onInit(store) {
      // Carica automaticamente i dati quando lo store viene inizializzato
      store.caricaVideogiochi();
    },
  }),
);
