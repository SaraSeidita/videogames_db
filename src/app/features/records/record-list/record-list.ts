import { Component, inject } from '@angular/core';
import { VideogiochiStore } from '../store/videogioco.store';

@Component({
  selector: 'app-record-list',
  imports: [],
  templateUrl: './record-list.html',
  styleUrl: './record-list.css',
})
export class RecordList {
  readonly store = inject(VideogiochiStore);
}
