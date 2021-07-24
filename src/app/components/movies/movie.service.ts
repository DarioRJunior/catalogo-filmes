import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = "http://localhost:3000/movies"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error '] : ['msg-success']
    })
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.baseUrl, movie).pipe(map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  read(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl)
  }

  readById(id: string): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Movie>(url)
  }

  update(movie: Movie): Observable<Movie> {
    const url = `${this.baseUrl}/${movie.id}`
    return this.http.put<Movie>(url, movie)
  }

  delete(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Movie>(url)
  }
}
