import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { BooksWithPromiseComponent } from './books-with-promise/books-with-promise.component';
import { BooksWithStoreComponent } from './books-with-store/books-with-store.component';
import { LikeDislikeComponent  } from './like-dislike/like-dislike.component';
import  { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books-promise', component: BooksWithPromiseComponent },
  { path: 'books-ngrx', component: BooksWithStoreComponent },
  { path: 'like-dislike', component: LikeDislikeComponent  },
  { path: 'ngrx-todo', component: TodoComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
