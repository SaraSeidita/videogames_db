import { Component, inject, signal } from '@angular/core';
import { AuthServices } from '../../../shared/services/auth.services';
import { LoginDTO } from '../../../shared/models/loginDTO.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  // gestione login e autenticazione dell'utente
  public authService = inject(AuthServices); // inietta il servizio di autenticazione per gestire lo stato dell'utente
  private router = inject(Router); // inietta il router per navigare tra le pagine

  // modello form login 
  credentials: LoginDTO = {
    username: '',
    pw: ''
  };

  // gestione messaggi di errore ed estetica del bottone 
  errorMessage = signal<string | null>(null); // signal per il messaggio di errore
  isLoading = signal<boolean>(false); // signal per lo stato di caricamento del login

  onLogin(): void {
    if (!this.credentials.username || !this.credentials.pw) {
      this.errorMessage.set('Inserisci username e password'); // se i campi sono vuoti, mostra un messaggio di errore
      return;
    }

    this.isLoading.set(true); // imposta lo stato di caricamento a true
    this.errorMessage.set(null); // resetta il messaggio di errore

    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        this.isLoading.set(false); // imposta lo stato di caricamento a false 
        this.credentials = { username: '', pw: '' }; // resetta i campi del form
      }, 
      error: (err) => {
        this.isLoading.set(false); // imposta lo stato di caricamento a false
        if (err.status === 401) {
          this.errorMessage.set('Credenziali non valide'); // se il backend risponde con 401, mostra un messaggio di errore
        } else {
          this.errorMessage.set('Errore di connessione. Riprova più tardi.'); // per altri errori, mostra un messaggio generico 
        }
      }
    });

  } 

  onLogout(): void {
    this.authService.logout(); // chiama il metodo di logout del servizio di autenticazione
    this.router.navigate(['/']); // reindirizza alla home page dopo il logout
  }


}
