import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService  } from '../film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
   
   id2: number;
   films: Film[];
   selectedFilm: Film;

   onSelect(film: Film): void {
 		this.selectedFilm = film;
   }

  constructor(private filmService: FilmService) { 
   }

   getFilms(): void {
   	this.filmService.getFilms().subscribe(films => this.films = films);
   }

  ngOnInit(): void {
    this.getFilms();
  }

}
