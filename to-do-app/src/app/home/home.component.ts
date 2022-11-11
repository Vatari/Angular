import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: ITodo[] = [
    { title: 'Todo 1', isComplete: false },
    { title: 'Todo 2', isComplete: true },
    { title: 'Todo 3', isComplete: false },
    { title: 'Todo 4', isComplete: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  markAllasCompleted(): void {
    for (const todo of this.todos) {
      todo.isComplete = true;
    }
  }
}
