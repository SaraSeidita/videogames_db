// le chiamate http al backend per il recupero dei dati, come la lista dei videogiochi, i dettagli di un videogioco, ecc. sono gestite in questo store

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { VideogiocoDetailModel, VideogiocoListModel } from '../models/record';
import { Observable } from 'rxjs';

// recupero lista record usando una chiamata http al backend .NET, e gestione dello stato della lista dei videogiochi usando Signal Store di NgRx
@Injectable({ providedIn: 'root' })
export class VideogiocoService {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = environment.API_BASE_URL;

  // chiamata per la lista
  getLista(): Observable<{ success: boolean; data: VideogiocoListModel[] }> {
    return this._http.get<{ success: boolean; data: VideogiocoListModel[] }>(
      `${this._baseUrl}/Videogioco/ListaVideogiochi`,
    );
  }

  // chiamata singolo
  getDettaglio(id: number): Observable<{ success: boolean; data: VideogiocoDetailModel }> {
    return this._http.get<{ success: boolean; data: VideogiocoDetailModel }>(
      `${this._baseUrl}/Videogioco/SingoloVideogioco/${id}`,
    );
  }
}
