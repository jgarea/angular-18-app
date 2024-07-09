import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    InputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-18-app';
  
  // todoData:NTodo.TodoData[]= [];
  // todoData:NTodo.TodoData[]= [TODO_DATA[0]];
  // todoData:NTodo.TodoData[]= TODO_DATA.filter(item => item.id < 2);
  todoData:any = TODO_DATA[0];
//para seleccionar un elemento del DOM
  // @ViewChild(TodoComponent,{read: ElementRef}) todo?: ElementRef;
  @ViewChildren(TodoComponent,{read: ElementRef}) todo?: QueryList<ElementRef>;
  constructor(
    public router:Router
  ) {  }

  getTodoInfo(val: NTodo.TodoData){
    console.log('Click en icono: ', val);
  }

  trackByFn(_index: number, item: NTodo.TodoData){
    return item.id;
  }

  orderData(){
    // this.todoData=this.todoData.sort((a, b) => a.priority - b.priority);
  }

  change(){
    // const todo = document.querySelectorAll('app-todo');
    // console.log(todo);
    // const items = this.todo?.map(item => item);
    // console.log(items);
    // this.todo?.changes.subscribe(values => {
    //   console.log(values);
    // })
    this.todoData={...this.todoData, description: 'ngOnchanges'};

  }

  addTodo(){
    // this.todoData=TODO_DATA.filter(item => item.id < 4);
  }
}
