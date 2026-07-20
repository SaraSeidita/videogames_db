import { VideogiocoDetailModel } from "../../../../shared/models/record.model";

// Unico stato globale per gestire la sezione Videogiochi
export interface VideogiocoState {
  
  detail: VideogiocoDetailModel | null; // Singolo oggetto (o null se non ancora caricato)
  loading: boolean;
  error: string | null;
}

// Stato iniziale combinato
export const VideogiocoInitialState: VideogiocoState = {
  detail: null, // Nessun dettaglio selezionato all'inizio
  loading: false,
  error: null,
};