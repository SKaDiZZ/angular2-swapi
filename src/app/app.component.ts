import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';

@Component({
  selector: 'app-root',
  template: `
    <li *ngIf="film$ | async as film">
      <h1>{{ film.title }}</h1>
      <h3>{{ film.release_date | date }}</h3>
      <p>{{ film.opening_crawl }}</p>
    </li>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  film$: Observable<Film>;

  constructor(private _swapi: Angular2SwapiService) {}

  ngOnInit() {
   this.film$ = this._swapi.getFilm(2);
  }

}
