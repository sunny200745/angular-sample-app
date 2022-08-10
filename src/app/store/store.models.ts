import { Todo } from '../todo/todo.models';
import { Book } from '../book-list/books.model'

export interface AppState {
    todos: Array<Todo>;
    count: number;
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
    likeDislike:{
        like: number,
        dislike: number
      }
}


export const INITIAL_STATE: AppState = {
    todos: [],
    count: 0,
    books: [],
    collection:[],
    likeDislike:{
        like: 100,
        dislike: 25
      }

}