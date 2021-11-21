import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Movie } from "src/app/shared/models/movie.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {

    constructor(private http: HttpClient){}

    listAllMovies(page: number): Observable<Movie[]> {
        return this.http.get<Movie[]>(environment.URL_API + 'movies' + '?_page=' + page + '&_limit=20');
    }

    registerMovie(movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(environment.URL_API + 'movies', movie);
    }

}