import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoWatchingComponent } from './pages/who-watching/who-watching.component';


const routes: Routes = [
  {path: '', component: WhoWatchingComponent},
  {
    path: 'movie',
    loadChildren: () => import('./../app/pages/movies/movie.module').then(m => m.MovieModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
