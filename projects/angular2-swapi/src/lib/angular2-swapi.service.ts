import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { People, Film, Starship, Vehicle, Species, Planet } from './angular2-swapi.models';

@Injectable({
  providedIn: 'root'
})
export class Angular2SwapiService {

  TAG = 'Angular2 Swapi Service : ';
  swapiUrl = 'https://swapi.co/api/';

  constructor(private _http: HttpClient) { }

  /**
   * Add page value url param
   */
  getByPage(page: number): string {
    if (page) { return '&page=' + page; } else { return ''; }
  }

  /**
   * Return list of people as observable
   */
  getPeople(page?: number): Observable<People[]> {
    return this._http.get<People[]>(`${this.swapiUrl}people?format=json${this.getByPage(page)}`)
              .pipe(
                map(resp => resp['results']),
                catchError(this.handleError)
              );
  }

  /**
   * Return people by id
   */
  getPeopleById(id: number): Observable<People> {
    return this._http.get<People>(`${this.swapiUrl}people/${id}?format=json`)
              .pipe(
                catchError(this.handleError)
              );
  }

  /**
   * Search people by name
   */
  searchPeople(name: string): Observable<People[]> {
    return this._http.get<People[]>(`${this.swapiUrl}people?search=${name}`)
              .pipe(
                map(resp => resp['results']),
                catchError(this.handleError)
              );
  }

  /**
   * Return list of films as observable
   */
  getFilms(page?: number): Observable<Film[]> {
    return this._http.get<Film[]>(`${this.swapiUrl}films?format=json${this.getByPage(page)}`)
              .pipe(
                map(resp => resp['results']),
                catchError(this.handleError)
              );
  }

  /**
   * Return film by id
   */
  getFilm(id: number): Observable<Film> {
    return this._http.get<Film>(`${this.swapiUrl}films/${id}?format=json`)
              .pipe(
                catchError(this.handleError)
              );
  }

  /**
   * Search films by title
   */
  searchFilms(title: string): Observable<Film[]> {
    return this._http.get<Film[]>(`${this.swapiUrl}films?search=${title}`)
    .pipe(
      map(resp => resp['results']),
      catchError(this.handleError)
    );
  }

/**
 * Return list of starships
 */
getStarships(page?: number): Observable<Starship[]> {
    return this._http.get<Starship[]>(`${this.swapiUrl}starships?format=json${this.getByPage(page)}`)
    .pipe(
      map(resp => resp['results']),
      catchError(this.handleError)
    );
  }

  /**
   * Return starship by id
   */
  getStarship(id: number): Observable<Starship> {
    return this._http.get<Starship>(`${this.swapiUrl}starships/${id}?format=json`)
    .pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Search starships by name
   */
  searchStarships(name: string): Observable<Starship[]> {
    return this._http.get<Starship[]>(`${this.swapiUrl}starships?search=${name}`)
    .pipe(
      map(resp => resp['results']),
      catchError(this.handleError)
    );
  }

  /**
   * Return list of vehicles as observable
   */
  getVehicles(page?: number): Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(`${this.swapiUrl}vehicles?format=json${this.getByPage(page)}`)
      .pipe(
        map(resp => resp['results']),
        catchError(this.handleError)
      );
    }

  /**
   * Return vehicle by id
   */
  getVehicle(id: number): Observable<Vehicle> {
    return this._http.get<Vehicle>(`${this.swapiUrl}vehicles/${id}?format=json`)
    .pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Search vehicles by name
   */
  searchVehicles(name: string): Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(`${this.swapiUrl}vehicles?search=${name}`)
    .pipe(
      map(resp => resp['results']),
      catchError(this.handleError)
    );
  }

  /**
   * Retrun list of species as observable
   */
  getSpecies(page?: number): Observable<Species[]> {
    return this._http.get<Species[]>(`${this.swapiUrl}species?format=json${this.getByPage(page)}`)
      .pipe(
        map(resp => resp['results']),
        catchError(this.handleError)
      );
    }

  /**
   * Return species by id
   */
  getSpeciesById(id: number): Observable<Species> {
    return this._http.get<Species>(`${this.swapiUrl}species/${id}?format=json`)
    .pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Search species by name
   */
  searchSpecies(name: string): Observable<Species[]> {
    return this._http.get<Species[]>(`${this.swapiUrl}species?search=${name}`)
    .pipe(
      map(resp => resp['results']),
      catchError(this.handleError)
    );
  }

  /**
   *  Return list od planets as observable
   */
  getPlanets(page?: number): Observable<Planet[]> {
    return this._http.get<Planet[]>(`${this.swapiUrl}planets?format=json${this.getByPage(page)}`)
      .pipe(
        map(resp => resp['results']),
        catchError(this.handleError)
      );
  }

  /**
   * Return planet by id
   */
  getPlanet(id: number): Observable<Planet> {
    return this._http.get<Planet>(`${this.swapiUrl}planets/${id}?format=json`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Search planets by name
   */
  searchPlanets(name: string): Observable<Planet[]> {
    return this._http.get<Planet[]>(`${this.swapiUrl}planets?search=${name}`)
    .pipe(
      map(resp => resp['results']),
      catchError(this.handleError)
    );
  }

  /**
   * Handle HTTP Errors
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`${this.TAG} An error occurred:`, error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `${this.TAG} Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      `${this.TAG} Something bad happened; please try again later.`);
  }

}
