import { VideogiocoListModel } from "../../../../shared/models/record.model";

// Unico stato globale per gestire la sezione Videogiochi
export interface VideogiochiState {
  lista: VideogiocoListModel[];
  loading: boolean;
  error: string | null;
}

// Stato iniziale combinato
export const VideogiochiInitialState: VideogiochiState = {
  lista: [],
  loading: false,
  error: null,
};