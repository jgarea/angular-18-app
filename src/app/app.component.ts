import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    HeaderComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  todos:NTodo.TodosResponse = {totalRecords: 0, data: []};

  private readonly baseUrl='http://localhost:3000/todos';

  constructor(
    private readonly http: HttpClient
  ) {}
  ngOnInit(): void {
    // this.http.get(this.baseUrl).subscribe(console.log);
    this.http.get<NTodo.TodosResponse>(this.baseUrl).subscribe(val=>this.todos = val);
  }

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }
}
