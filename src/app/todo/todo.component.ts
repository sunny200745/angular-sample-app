import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/store.models';
import { Todo } from './todo.models';
import * as TodoActions from '../actions/todos.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<Array<Todo>> | undefined
  constructor(private store: Store<AppState>) {
    this.todos = this.store.select('todos')
    this.store.subscribe((state) => {
      console.log('state', state);
    })
  }

  ngOnInit(): void {
  }

  onAddTodo(newTodo: Todo) {
    this.store.dispatch(new TodoActions.AddTodo(newTodo.text))
  }

  onShow(filter: any) {
    this.store.dispatch(new TodoActions[filter]())
  }
  onCompletedTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.CompleteTodo(todo))
  }
  onEditTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.EditTodo(todo));
  }
  onUpdateTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.UpdateTodo(todo));
  }
  onDeletedTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.DeleteTodo(todo));
  }


}
