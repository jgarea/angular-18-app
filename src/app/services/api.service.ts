import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NTodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl='http://localhost:3000/todos';


  constructor(
    private readonly http: HttpClient
  ) { }
  get<T>() {
    const headers = new HttpHeaders()
    .set('my-token','tokenValue')
    // this.http.get(this.baseUrl).subscribe(console.log);
    return this.http.get<T>(this.baseUrl,{ headers});
  }

put<P, R>(payload: P,id: number) {
  const params = new HttpParams()
  .set('date','2021-09-01');
   return this.http.put<R>(this.baseUrl + '/' + id,payload ,{ params});
}
}
