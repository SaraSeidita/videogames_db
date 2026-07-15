import { Routes } from '@angular/router';
import { RecordList } from './features/records/record-list/record-list';
import { RecordDetail } from './features/records/record-detail/record-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'record-list', pathMatch: 'full' }, // route di default che reindirizza alla lista dei videogiochi
    { path: 'record-list', component: RecordList }, // route per la lista dei videogiochi
    { path: 'record-detail/:id', component: RecordDetail }, // route con parametro dinamico per l'ID del videogioco
    { path: '**', redirectTo: 'record-list' } // fallback per percorsi non trovati
];
