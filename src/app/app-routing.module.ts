import { MovieDeleteComponent } from './components/movies/movie-delete/movie-delete.component';
import { MovieUpdateComponent } from './components/movies/movie-update/movie-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MoviesCrudComponent } from './views/movies-crud/movies-crud.component';
import { MoviesCreateComponent } from './components/movies/movies-create/movies-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "movies",
  component: MoviesCrudComponent
}, {
  path: "movies/create",
  component: MoviesCreateComponent
}, {
  path: "movies/update/:id",
  component: MovieUpdateComponent
}, {
  path: "movies/delete/:id",
  component: MovieDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
