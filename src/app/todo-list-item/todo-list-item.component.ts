import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.models';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Output() completedTodo = new EventEmitter<Todo>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deletedTodo = new EventEmitter<Todo>();
  @Output() updateTodo = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo)
  }

  onCompletedTodo(todo:Todo){
    this.completedTodo.emit(todo)
  }
  onDeletedTodo(todo:Todo){
    this.deletedTodo.emit(todo)
  }
  onUpdateTodo(todo:Todo){
    this.updateTodo.emit(todo)
  }
  onEditTodo(todo:Todo){
    this.editTodo.emit(todo)
  }
}
