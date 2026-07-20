import { inject } from '@angular/core';
import { signalStore, withState, withMethods, withHooks, patchState } from '@ngrx/signals';
import { pipe, switchMap, tap } from 'rxjs';
import { VideogiochiInitialState } from './videogioco-lista.slice';
import { VideogiocoService } from '../../../../shared/services/app.services';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

export const VideogiochiStore = signalStore(
  { providedIn: 'root' },
  withState(VideogiochiInitialState), // Ora contiene anche "detail" inizializzato a null
  withMethods((store, videogiocoService = inject(VideogiocoService)) => ({

    // async caricaListaVideogiochi() {
    //   patchState(store, { loading: true, error: null });
    //   try {
    //     const response = await firstValueFrom(videogiocoService.getLista());

    //     if (response.success) {
    //       patchState(store, { lista: response.data, loading: false });
    //     } else {
    //       patchState(store, { error: 'Errore nel recupero dati', loading: false });
    //     }
    //   } catch (err: any) {
    //     patchState(store, { error: err.message || 'Errore di rete', loading: false });
    //   }
    // },

    // la differenza tra quello sopra e questo è che questo usa rxjs e non async/await, quindi è più reattivo e meno bloccante 
    // questo perché ho deciso di dividere gli store in due, uno per la lista e uno per il dettaglio, così da non avere un unico store che gestisce tutto, 
    // ma due store separati che si occupano di cose diverse
    // così da avere una gestione più reattiva della lista e una gestione più semplice del dettaglio
    // conservo comunque il pezzo di codice sopra per ricordarmelo

    caricaListaVideogiochi: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          videogiocoService.getLista().pipe(
            tap({
              next: (res) => patchState(store, { lista: res.data, loading: false }),
              error: (err) => patchState(store, { error: err.message, loading: false }),
            }),
          ),
        ),
      ),
    ),
  })),
);
