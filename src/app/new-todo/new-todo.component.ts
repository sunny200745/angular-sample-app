import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @Output() onCreateTodo = new EventEmitter();
  newTodo:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  onSaveTodo(){
    if(this.newTodo){
      this.onCreateTodo.emit({text: this.newTodo})
    }
    this.newTodo = '';
  }
}
