import { inject } from '@angular/core';
import { signalStore, withState, withMethods, withHooks, patchState } from '@ngrx/signals';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { VideogiocoDetailModel, VideogiocoListModel } from '../../../shared/models/record';
import { VideogiochiInitialState } from './videogioco.slice';
import { VideogiocoService } from '../../../shared/services/app.services';

export const VideogiochiStore = signalStore(
  { providedIn: 'root' },
  withState(VideogiochiInitialState), // Ora contiene anche "detail" inizializzato a null
  withMethods((store, videogiocoService = inject(VideogiocoService)) => ({
    
    async caricaVideogiochi() {
      patchState(store, { loading: true, error: null });
      try {
        const response = await firstValueFrom(videogiocoService.getLista());

        if (response.success) {
          patchState(store, { lista: response.data, loading: false });
        } else {
          patchState(store, { error: 'Errore nel recupero dati', loading: false });
        }
      } catch (err: any) {
        patchState(store, { error: err.message || 'Errore di rete', loading: false });
      }
    },

    async caricaDettaglioVideogioco(id: number) {
      patchState(store, { loading: true, error: null }); 
      try {
        // Tipizziamo la risposta con il modello singolo (non array)
        const response = await firstValueFrom(
          videogiocoService.getDettaglio(id)
        );

        if (response.success) {
          // Ora TypeScript riconosce 'detail' e non darà più errore!
          patchState(store, { detail: response.data, loading: false });
        } else {
          patchState(store, { error: 'Errore nel recupero dati del singolo record', loading: false });
        }
      } catch (err: any) {
        patchState(store, { error: err.message || 'Errore di rete', loading: false });
      }
    }
  })),
  withHooks({
    onInit(store) {
      store.caricaVideogiochi();
    },
  }),
);