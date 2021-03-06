# angular2-swapi 
Angular2Swapi library will help developers building angular and ionic applications which are using data from **StarWars API**.

# Installation
To install this library run:
```bash
npm install angular2-swapi --save
```
# Bootstrap
Import Angular2SwapiModule in your app.module.ts file and add it into imports array:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2SwapiModule } from 'angular2-swapi';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2SwapiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
# Angular2SwapiService
**angular2-swapi** is actually service library providing methods to call https://swapi.co and return resources based on your query. You can say it is HTTP client for StarWars API.

## List of available methods
### People
Method | Parameters | Return | Description
-------|------------|--------|------------
getPeople() | page?: number | Observable<People[]> | Returns list of people as Observable
getPeopleById(id) | id: number | Observable< People > | Returns character by id
searchPeople(name) | name: string | Observable<People[]> | Search people by name
### Films
Method | Parameters | Return | Description
-------|------------|--------|------------
getFilms() | page?: number | Observable<Film[]> | Returns list of films as Observable
getFilm(id) | id: number | Observable < Film > | Returns film by id
searchFilms(title) | title: string | Observable<Film[]> | Search films by title
### Starships
Method | Parameters | Return | Description
-------|------------|--------|------------
getStarships(page) | page?: number | Observable<Starship[]> | Return list of starships as Observable
getStarship(id) | id: number | Observable< Starship > | Return starship by id
searchStarships(name) | name: string | Observable<Starship[]> | Search starships by name or model
### Vehicles
Method | Parameters | Return | Description
-------|------------|--------|------------
getVehicles(page) | page?: number | Observable<Vehicle[]> | Return list of vehicles as Observable
getVehicle(id) | id: number | Observable< Vehicle > | Returns vehicle by id
searchVehicles(name) | name: string | Observable<Vehicle[]> | Search vehicles by name or model
### Species
Method | Parameters | Return | Description
-------|------------|--------|------------
getSpecies(page) | page?: number | Observable<Species[]> | Return list of species as Observable
getSpeciesById(id) | id: number | Observable< Species > | Returns species by id
searchSpecies(name) | name: string | Observable<Species[]> | Search species by name
### Planets
Method | Parameters | Return | Description
-------|------------|--------|------------
getPlanets(page) | page?: number | Observable<Planet[]> | Return list of planets as Observable
getPlanet(id) | id: number | Observable< Planet > | Returns planet by id
searchPlanets(name) | name: string | Observable<Planet[]> | Search planets by name

## Using Angular2SwapiService
Get list of films and display data:
```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';

@Component({
  selector: 'app-root',
  template: `
    <li *ngFor="let film of film$ | async">
      <h1>{{ film.title }}</h1>
      <h3>{{ film.release_date | date }}</h3>
      <p>{{ film.opening_crawl }}</p>
    </li>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  film$: Observable<Film[]>;

  constructor(private _swapi: Angular2SwapiService) {}

  ngOnInit() {
    // Get list of films you can specify page
   this.film$ = this._swapi.getFilms();
  }

}
```
Search films by title:
```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';

@Component({
  selector: 'app-root',
  template: `
    <li *ngFor="let film of film$ | async">
      <h1>{{ film.title }}</h1>
      <h3>{{ film.release_date | date }}</h3>
      <p>{{ film.opening_crawl }}</p>
    </li>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  film$: Observable<Film[]>;

  constructor(private _swapi: Angular2SwapiService) {}

  ngOnInit() {
    // Search films by title
   this.film$ = this._swapi.searchFilms('menace');
  }

}
```
Get film by id:
```typescript
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
    // Get film with id=2
   this.film$ = this._swapi.getFilm(2);
  }

}
```
You can use the same pattern to get all the other resources from Star Wars API and display them in your application.

## Where is Wookiee?
I don't speak wookie, do you? Still working on it.

## StarWars API Resources
Please check full Star Wars API documentation by Paul Hallet at https://swapi.co/documentation
