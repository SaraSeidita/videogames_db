import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecordList } from './features/records/record-list/record-list';
import { Header } from "./core/layout/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GamesPoponeDemo');
}
