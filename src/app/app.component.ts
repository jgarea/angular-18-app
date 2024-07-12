import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    HeaderComponent,
    FormsModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  // todos!: Observable<NTodo.TodosResponse> | undefined;
   todos:NTodo.TodosResponse = {totalRecords: 0, data: []};


  constructor(
private readonly apiService: ApiService  ) {}
  ngOnInit(): void {
    this.apiService.get<NTodo.TodosResponse>().subscribe(val => this.todos = val);
  }
 

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }

  updateTodo(item: NTodo.TodoData){
    this.apiService.put(item,item.id).subscribe(console.log);
  }
}
