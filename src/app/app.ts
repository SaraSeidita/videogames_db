import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecordList } from './features/records/record-list/record-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecordList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GamesPoponeDemo');
}
