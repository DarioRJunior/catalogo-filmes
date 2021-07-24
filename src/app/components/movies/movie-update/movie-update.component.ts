import { Movie } from './../movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  movie!: Movie

  constructor(private MovieService: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ''
    this.MovieService.readById(id).subscribe(movie => { this.movie = movie })
  }

  updateMovie(): void {
    this.MovieService.update(this.movie).subscribe(() => {
      this.MovieService.showMessage('Filme atualizado com sucesso!')
      this.router.navigate(['/movies'])
    })
  }

  cancel(): void {
    this.router.navigate(['/movies'])
  }


}
