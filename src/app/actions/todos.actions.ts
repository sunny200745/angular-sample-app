import { createAction, props, Action } from '@ngrx/store';
import { Todo } from '../todo/todo.models';

export const ADD_TODO = '[todo] ADD_TODO';
export const UPDATE_TODO = '[todo] UPDATE_TODO';
export const DELETE_TODO = '[todo] DELETE_TODO';
export const COMPLETE_TODO = '[todo] COMPLETE_TODO';
export const EDIT_TODO = '[todo] EDIT_TODO';

export const COMPLETE = '[filter] COMPLETE';
export const PENDING = '[filter] PENDING';
export const DELETED = '[filter] DELETED';
export const ALL = '[filter] ALL';



export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: string) {

  }
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: Todo) {

  }
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: Todo) {

  }
}

export class CompleteTodo implements Action {
  readonly type = COMPLETE_TODO;
  constructor(public payload: Todo) {

  }
}

export class EditTodo implements Action {
  readonly type = EDIT_TODO;
  constructor(public payload: Todo) {

  }
}

export class Complete implements Action {
  readonly type = COMPLETE;
}

export class Pending implements Action {
  readonly type = PENDING;
}

export class Deleted implements Action {
  readonly type = DELETED;
}

export class All implements Action {
  readonly type = ALL;
}

export type AllActions = AddTodo | UpdateTodo | DeleteTodo | CompleteTodo | EditTodo | Complete | Pending | Deleted | All;


