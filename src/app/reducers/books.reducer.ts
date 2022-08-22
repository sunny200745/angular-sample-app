import { Action, createReducer, on } from '@ngrx/store';
import { retrievedBookList } from '../actions/books.actions';
import { Book } from '../book-list/books.model';
import { state } from '@angular/animations';




export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
