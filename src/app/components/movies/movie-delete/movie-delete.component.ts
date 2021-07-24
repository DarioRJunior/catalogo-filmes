import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from './../movie.service';
import { Movie } from './../movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  movie!: Movie;

  constructor(
    private MovieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ''
    this.MovieService.readById(id).subscribe((Movie) => {
      this.movie = Movie;});
  }

  deleteMovie(): void {
    this.MovieService.delete(this.movie.id!).subscribe(() => {
      this.MovieService.showMessage('Filme deletado com sucesso!')
      this.router.navigate(['/movies'])
    })
  }

  cancel(): void {
    this.router.navigate(["/movies"]);
  }
}
