import { inject } from '@angular/core';
import { signalStore, withState, withMethods, withHooks, patchState } from '@ngrx/signals';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, pipe, switchMap, tap } from 'rxjs';
import { VideogiocoInitialState } from './videogioco-detail.slice';
import { VideogiocoService } from '../../../../shared/services/app.services';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

export const VideogiocoDetailStore = signalStore(
  { providedIn: 'root' },
  withState(VideogiocoInitialState), // Ora contiene anche "detail" inizializzato a null
  withMethods((store, videogiocoService = inject(VideogiocoService)) => ({
    // async caricaDettaglioVideogioco(id: number) {
    //   patchState(store, { loading: true, error: null });
    //   try {
    //     // Tipizziamo la risposta con il modello singolo (non array)
    //     const response = await firstValueFrom(
    //       videogiocoService.getDettaglio(id)
    //     );

    //     if (response.success) {
    //       // Ora TypeScript riconosce 'detail' e non darà più errore!
    //       patchState(store, { detail: response.data, loading: false });
    //     } else {
    //       patchState(store, { error: 'Errore nel recupero dati del singolo record', loading: false });
    //     }
    //   } catch (err: any) {
    //     patchState(store, { error: err.message || 'Errore di rete', loading: false });
    //   }
    // }

    caricaDettaglioVideogioco: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null, detail: null })),
        switchMap((id) =>
          videogiocoService.getDettaglio(id).pipe(
            tap({
              next: (res) => patchState(store, { detail: res.data, loading: false }),
              error: (err) => patchState(store, { error: err.message, loading: false }),
            }),
          ),
        ),
      ),
    ),
  })),
);
