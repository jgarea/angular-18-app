import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output, ViewEncapsulation } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import spanish from '@angular/common/locales/es';
import { API_TOKEN } from '../../app.config';
import { ApiService } from '../../services/api.service';
registerLocaleData(spanish);

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TodoComponent {

  constructor(
    @Inject(API_TOKEN) private readonly apiService: ApiService
  ) {
    console.log('TodoComponent', this.apiService.instanceId);
  }
  @Input({ required: true}) todoData!: NTodo.TodoData;

  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();


  get priority(): string {
    switch (this.todoData.priority) {
      case NTodo.Priority.LOW:
        
        return NTodo.PriorityText.LOW;
    
      case NTodo.Priority.MEDIUM:
        
        return NTodo.PriorityText.MEDIUM;
    
      default:
        return NTodo.PriorityText.HIGH;
    }
    
  }

  get progress() {
    return this.todoData.progress * 100;
  }

  get range() {
    if (this.progress >= 0 && this.progress <= NTodo.Range.LOW) {
      return NTodo.RangeText.LOW;
    } else if (this.progress > NTodo.Range.LOW && this.progress <= NTodo.Range.MEDIUM) {
      return NTodo.RangeText.MEDIUM;
    }

    return NTodo.RangeText.HIGH;
  }
  
}
