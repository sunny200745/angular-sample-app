import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { PaginationComponent } from './pagination/pagination.component';
import { BooksWithPromiseComponent } from './books-with-promise/books-with-promise.component';
import { StoreModule } from '@ngrx/store';
import { BooksWithStoreComponent } from './books-with-store/books-with-store.component';
// import { counterReducer } from './reducers/counter.reducer';
// import { booksReducer } from './reducers/books.reducer';
// import { collectionReducer } from './reducers/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
// import { likeDislikeReducer } from './reducers/like-dislike.reducer';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { reducers } from './store/reducers.model';
import { INITIAL_STATE } from './store/store.models';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    PaginationComponent,
    BooksWithPromiseComponent,
    BooksWithStoreComponent,
    BookListComponent,
    BookCollectionComponent,
    LikeDislikeComponent,
    TodoComponent,
    TodoListComponent,
    TodoListItemComponent,
    NewTodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      reducers,
      {
        initialState: INITIAL_STATE
      }
    ),
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
