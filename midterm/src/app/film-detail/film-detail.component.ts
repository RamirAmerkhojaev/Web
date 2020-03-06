import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../film.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Film } from '../film';


@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(
  private route: ActivatedRoute,
  private filmService: FilmService,
  private location: Location) { }
   
   @Input() film: Film;


   getFilm(): void {
   	  const id = +this.route.snapshot.paramMap.get('id');
   	  this.filmService.getFilm(id).subscribe(film => this.film = film)

   }

  ngOnInit(): void {
  	this.getFilm();
  }

}
