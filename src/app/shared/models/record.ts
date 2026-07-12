// modello per rappresentare lista dei videogiochi e i dettagli di un videogioco, da utilizzare nei componenti record-list e record-detail


export interface VideogiocoListModel {
  // Modello per la lista dei videogiochi recuperato dal backend
  id: number;
  titolo: string;
  genere: string;
  annoUscita: number;
  annoGiocata: number;
  trama: string;
  immagineUrl: string;
}
