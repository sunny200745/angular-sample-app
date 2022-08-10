import { Todo } from '../todo/todo.models';
import * as TodoActions from '../actions/todos.actions';
export type Action = TodoActions.AllActions;

export function todosReducer(state: Array<Todo>, action: Action): Array<Todo> {
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      const newTodoArray = new Array<Todo>({
        id: String(state.length + 1),
        text: action.payload,
        isCompleted: false,
        isVisible: true
      })
      return state.concat(newTodoArray);
    }
    case TodoActions.COMPLETE_TODO: {

      return state.map((todo) => {
        return (todo.id !== action.payload.id) ? todo : { ...todo, isCompleted: true }
      })
    }

    case TodoActions.DELETE_TODO: {
      return state.filter(todo => {
        return todo.id !== action.payload.id
      })
    }

    case TodoActions.UPDATE_TODO: {

      return state.map(todo => {
        return (todo.id !== action.payload.id) ? todo : { ...todo, isEditabled: false, text: action.payload.text }
      })

    }
    case TodoActions.EDIT_TODO: {
      return state.map(todo => {
        return (todo.id !== action.payload.id) ? todo : { ...todo, isEditabled: true }
      })
    }
    case TodoActions.ALL: {
      return state.map(todo => {
        return { ...todo, isVisible: true }
      })
    }

    case TodoActions.PENDING: {
      return state.map(todo => {
        if (!todo.isCompleted) {
          return { ...todo, isVisible: true }
        } else {
          return { ...todo, isVisible: false }
        }
      })
    }
    case TodoActions.COMPLETE: {
      return state.map(todo => {
        if (!todo.isCompleted) {
          return { ...todo, isVisible: false }
        } else {
          return { ...todo, isVisible: true }
        }
      })
    }
    default: {
      return state;
    }

  }
}
