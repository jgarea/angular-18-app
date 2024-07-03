import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, LOCALE_ID, Output, QueryList, ViewChild } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule,registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { InputComponent } from '../../components/input/input.component';
registerLocaleData(es);

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  @Input({required: true}) todoData!: NTodo.TodoData;
  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();

  // Para seleccionar el primer elemento
  // @ContentChild('inputref') proyectedContent?:ElementRef<HTMLElement>;

  // @ContentChildren(InputComponent,{read: ElementRef}) proyectedContent?:ElementRef<HTMLElement>;
  @ContentChildren(InputComponent,{read: ElementRef}) proyectedContent?:QueryList<ElementRef>;
  get priority():string{
    switch(this.todoData.priority){
      case NTodo.Priority.LOW:
        return NTodo.PriorityText.LOW;
      case NTodo.Priority.MEDIUM:
        return NTodo.PriorityText.MEDIUM;
      case NTodo.Priority.HIGH:
        return NTodo.PriorityText.HIGH;
    }
    return '';

  }
  get progress():number{
    return this.todoData.progress * 100;
  }
  get range(){
    if(this.progress>0 && this.progress< NTodo.Range.LOW){
      return NTodo.RangeText.LOW;
    } else if(this.progress>= NTodo.Range.LOW && this.progress< NTodo.Range.MEDIUM){
      return NTodo.RangeText.MEDIUM;
    } 
    return NTodo.RangeText.HIGH;
  }

  selectContent() {
    // console.log(this.proyectedContent);
    const elements = this.proyectedContent?.map(val => val);
    console.log(elements);
  }
    
}
