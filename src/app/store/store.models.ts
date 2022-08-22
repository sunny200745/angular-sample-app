import { Todo } from '../todo/todo.models';
import { Book } from '../book-list/books.model';
import { StarWarsPeople, StarWarsPlanets, StarWarsStarships} from '../api.service';

export interface AppState {
  todos: Array<Todo>;
  count: number;
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  likeDislike: {
    like: number,
    dislike: number
  },
  rootState:any,
}


export const INITIAL_STATE: AppState = {
  todos: [],
  count: 0,
  books: [],
  collection: [],
  likeDislike: {
    like: 100,
    dislike: 25
  },
  rootState: undefined
}