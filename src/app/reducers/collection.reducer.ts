import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/books.model';
import { addBook, removeBook } from '../actions/books.actions';


export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter((id) => id != bookId)),
  on(addBook, (state, { bookId }) => {
    console.log(bookId)
    if (state.indexOf(bookId) > -1) return state

    return [...state, bookId]
  })
);
