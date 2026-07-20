import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import { VideogiocoDetailStore } from './store/videogioco-detail.store';

@Component({
  selector: 'app-record-detail',
  standalone: true,
  imports: [DatePipe],
  providers: [VideogiocoDetailStore],
  templateUrl: './record-detail.html',
  styleUrl: './record-detail.css',
})
export class RecordDetail {

  readonly store = inject(VideogiocoDetailStore);
  private readonly location = inject(Location);

  // Angular 21 intercetta automaticamente il parametro :id dall'URL 
  // se nel config del router è attivo "withComponentInputBinding()"
  id = input.required<number>(); 

  ngOnInit(): void {
    // Al caricamento del componente, ordiniamo allo store di caricare il singolo record usando l'id dell'URL
    this.store.caricaDettaglioVideogioco(this.id);
  }

  goBack(): void {
    this.location.back(); // Torna indietro alla lista mantenendo lo stato precedente
  }

}
