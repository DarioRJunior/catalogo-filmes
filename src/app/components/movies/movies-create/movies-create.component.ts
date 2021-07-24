import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {

  movie: Movie = {
    title: '',
    overview: '',
    date: '',
    genre: '',
    director: '',
    cast: ''
  }


  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {

  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
      this.movieService.showMessage('Filme Criado!')
      this.router.navigate(['/movies'])
    })

  }
  cancel(): void {
    this.router.navigate(['/movies'])
  }

}
