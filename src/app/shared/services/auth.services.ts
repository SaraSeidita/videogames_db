import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { LoginDTO, LoginResponse, UserProfile } from '../models/loginDTO.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthServices {
  private _http = inject(HttpClient);


  // per l'url uso l'interceptor baseUrl
  private readonly apiUrl = '/Auth/Login';

  // signals per lo stato 
  private accessTokenSignal = signal<string | null>(localStorage.getItem('accessToken'));
  private userSignal = signal<UserProfile | null>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
  );

  // signal computato: reattivo e sempre aggiornato con i valori correnti di accessTokenSignal e userSignal
  public isAuthenticated = computed(() => !!this.accessTokenSignal());
  public currentUser = computed(() => this.userSignal());

  // metodo per effettuare il login
  login(credentials: LoginDTO) : Observable<LoginResponse> {
    return this._http.post<LoginResponse>(this.apiUrl, credentials).pipe(
      // aggiorna i signals e salva i dati nel localStorage
      tap(response => { // tap: per eseguire effetti collaterali senza modificare il flusso di dati dell'Observable
        if (response.success) { // se il login ha successo, salva i token e l'utente nel localStorage e aggiorna i signals
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          localStorage.setItem('user', JSON.stringify(response.user));


          this.accessTokenSignal.set(response.accessToken); // aggiorna il signal con il nuovo accessToken
          this.userSignal.set(response.user); // aggiorna il signal con il nuovo user
        } 
      })
    );
  }

  logout(): void {
    // rimuove i dati dal localStorage e resetta i signals
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');

    this.accessTokenSignal.set(null); // resetta il signal a null
    this.userSignal.set(null); // resetta il signal a null
  }


  getToken(): string | null {
    return this.accessTokenSignal();
  }
  
}
