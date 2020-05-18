import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';



@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css']
})

export class MoviesComponent {

  constructor(private movieService: MovieService) { }

  title = "Movie List"
  movies: Movie[];
  selectedMovie: Movie;

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  getMovies() {
    this.movieService.getItems().subscribe(movies => { this.movies = movies; })
  }

  add(name:string,imageUrl:string,description:string):void{
    this.movieService.add({
      name,
      imageUrl,
      description
    } as Movie).subscribe(movie=>this.movies.push(movie))
  }

  delete(movie:Movie):void{
   this.movies= this.movies.filter(m=>m!=movie);
   this.movieService.delete(movie).subscribe();
  }
}