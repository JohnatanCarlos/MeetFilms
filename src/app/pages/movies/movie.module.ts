import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WhoWatchingComponent } from './../who-watching/who-watching.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule, 
        MovieRoutingModule, 
        InfiniteScrollModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [MovieListComponent, MovieFormComponent, WhoWatchingComponent],
    providers: [],
})
export class MovieModule { }
