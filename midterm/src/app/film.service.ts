import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FILMS } from './films';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
   films = FILMS;



  constructor() { }

  getFilms(): Observable<Film[]> {
  	return of(FILMS);
  }

  getFilm(id: number): Observable<Film> {
  	const index = this.films.findIndex(film => film.id == id);
  	this.films[index].view_count++;
  	return of(this.films[index]);	
  }

}
