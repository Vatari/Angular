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
    this.todos = this.todos.map((t) => ({
      ...t,
      isComplete: true,
    }));
  }

  handleStateChange(todo: ITodo): void {
    const index = this.todos.indexOf(todo);

    this.todos[index] = {
      ...todo,
      isComplete: !todo.isComplete,
    };
  }
}
