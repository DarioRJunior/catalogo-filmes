import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies-crud',
  templateUrl: './movies-crud.component.html',
  styleUrls: ['./movies-crud.component.css']
})
export class MoviesCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Filmes',
      icon: 'movies',
      routeUrl: '/movies'
    }
   }

  ngOnInit(): void {
  }

  navigateToMovieCreate(): void{
    this.router.navigate(['/movies/create'])
  }
}