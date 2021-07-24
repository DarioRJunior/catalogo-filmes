import { MovieService } from './../movie.service';
import { Movie } from './../movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-read',
  templateUrl: './movie-read.component.html',
  styleUrls: ['./movie-read.component.css']
})
export class MovieReadComponent implements OnInit {

  movies!: Movie[]
  displayedColumns = ['date', 'title', 'overview', 'genre', 'director', 'cast', 'action']

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.MovieService.read().subscribe(movies => {
      this.movies = movies
      console.log(movies)
    })
  }

}
