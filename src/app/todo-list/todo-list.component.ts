import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Todo> | undefined;
  @Output() completedTodo = new EventEmitter();
  @Output() deletedTodo = new EventEmitter();
  @Output() updateTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCompletedTodo(todo:Todo){
    this.completedTodo.emit(todo);
  }
  onEditTodo(todo:Todo){
    this.editTodo.emit(todo);
  }
  onUpdateTodo(todo:Todo){
    this.updateTodo.emit(todo);
  }
  onDeletedTodo(todo:Todo){
    this.deletedTodo.emit(todo);
  }

}
