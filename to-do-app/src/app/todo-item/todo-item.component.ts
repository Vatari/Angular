import { Component, Input, OnInit } from '@angular/core';

export interface ITodo {
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodo;

  constructor() {}

  ngOnInit(): void {}

  handleStateChange(todoToChange: ITodo): void {
    todoToChange.isComplete = !todoToChange.isComplete;
  }
}
