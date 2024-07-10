import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { HighlighedDirective } from './directives/highlighed.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    HighlighedDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = '';
  todoData = TODO_DATA[0];

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.highlighedDirective);
  }

  // @ViewChild(HighlighedDirective) highlighedDirective!: HighlighedDirective;
  @ViewChild('todoRef',{read: HighlighedDirective}) highlighedDirective!: HighlighedDirective;

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }

  trackByFn(_index: number, item: NTodo.TodoData) {
    return item.id;
  }

  // orderData() {
  //   this.todoData.sort((a, b) => a.priority -  b.priority);
  // }
  onToggleHighlighted(highlighted: boolean) {
    console.log(highlighted);
  }
}