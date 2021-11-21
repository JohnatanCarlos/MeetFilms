import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
    selector: 'app-movie-list',
    templateUrl: 'movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
    movies: Movie[] = [];
    page: number = 1;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.listMovie(this.page);        
    }

    listMovie(page: number): void {
        this.moviesService.listAllMovies(page).subscribe(movies => {
            this.movies = this.movies.concat(movies)
        });
    }

    onScroll(): void {
        this.page++
        console.log(this.page)
        this.listMovie(this.page);     
    }
}