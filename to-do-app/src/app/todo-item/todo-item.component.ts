import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface ITodo {
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodo;
  @Output() completeStateChange: EventEmitter<ITodo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleStateChange(todoToChange: ITodo): void {
    this.completeStateChange.emit(todoToChange);
  }
}
