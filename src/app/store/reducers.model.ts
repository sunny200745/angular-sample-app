import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './store.models';
import { todosReducer } from '../reducers/todos.reducer'
import { likeDislikeReducer } from '../reducers/like-dislike.reducer';
import { collectionReducer } from '../reducers/collection.reducer';
import { booksReducer } from '../reducers/books.reducer';
import { counterReducer } from '../reducers/counter.reducer';
import { starwarsReducer } from '../reducers/starwars.reducer';

export const reducers: ActionReducerMap<AppState> = {
    todos : todosReducer,
    count: counterReducer,
    books: booksReducer,
    collection: collectionReducer,
    likeDislike: likeDislikeReducer,
    rootState: starwarsReducer,


}