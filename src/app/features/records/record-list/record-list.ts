import { Component, inject } from '@angular/core';
import { VideogiochiStore } from './store/videogioco-lista.store';
import { VideogiocoListModel } from '../../../shared/models/record.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-list',
  standalone: true,
  providers: [VideogiochiStore],
  imports: [],
  templateUrl: './record-list.html',
  styleUrl: './record-list.css',
})
export class RecordList {
  readonly store = inject(VideogiochiStore);
  private readonly router = inject(Router);

  ngOnInit(): void {
    // Fai partire la chiamata HTTP per caricare i giochi all'avvio della pagina
    this.store.caricaListaVideogiochi(); 
  }

  // route verso record_detail
  onGiocoClick(gioco: VideogiocoListModel) : void {
    console.log(`Navigazione verso il dettaglio del gioco con ID: ${gioco.id}`);
    this.router.navigate(['/record-detail', gioco.id]);
  }
}
