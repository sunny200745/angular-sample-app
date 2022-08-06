import { createAction, props } from '@ngrx/store';
import { Book } from '../book-list/books.model'

export const addBook = createAction(
  '[Books] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Books] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Books] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);




