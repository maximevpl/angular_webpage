import { Component, OnInit } from '@angular/core';
import { FilmModel } from '../models/film-model';
import { FilmService } from '../services/film-service';
import { FilmComponent } from '../film/film.component';

@Component({
  selector: 'app-film-list',
  imports: [
    FilmComponent
  ],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent implements OnInit{

    films!: FilmModel[];
  
    constructor(private filmService: FilmService) {}
  
    ngOnInit(): void {
      this.films=this.filmService.getFilms();
    }
}
