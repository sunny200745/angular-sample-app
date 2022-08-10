import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './store.models';
import { todosReducer } from '../reducers/todos.reducer'
import { likeDislikeReducer } from '../reducers/like-dislike.reducer';
import { collectionReducer } from '../reducers/collection.reducer';
import { booksReducer } from '../reducers/books.reducer';
import { counterReducer } from '../reducers/counter.reducer';

export const reducers: ActionReducerMap<AppState> = {
    todos : todosReducer,
    count: counterReducer,
    books: booksReducer,
    collection: collectionReducer,
    likeDislike: likeDislikeReducer

}