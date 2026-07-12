import { VideogiocoListModel } from "../../../shared/models/record";

export interface VideogiochiState {
  // Stato della lista dei videogiochi
  lista: VideogiocoListModel[]; // Lista dei videogiochi
  loading: boolean; // Stato di caricamento
  error: string | null; // Messaggio di errore, se presente
}

export const VideogiochiInitialState: VideogiochiState = {
  // Stato iniziale della lista dei videogiochi
  lista: [], // Lista vuota all'inizio
  loading: false, // Non in caricamento all'inizio
  error: null, // Nessun errore all'inizio
};
