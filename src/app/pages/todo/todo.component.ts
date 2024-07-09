import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, input, Input, LOCALE_ID, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild } from '@angular/core';
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
export class TodoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  constructor() {
    // console.log('constructor TodoComponent',this.todoData);
    console.log('constructor TodoComponent');
  }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    // console.log('ngOnChanges',changes);
    // console.log('ngOnChanges',this.todoData);
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    // const input = this.proyectedContent?.nativeElement.querySelector('input');
    // input?.focus();
    // console.log(input);
    //se puede acceeder a los elementos proyectados, contentChild y contentChildren aunque no accede a toda la funcionalidad
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    const input = this.proyectedContent?.nativeElement.querySelector('input');
    input?.focus();
  }
  ngAfterViewInit(): void {
    //se puede acceder a los elementos del DOM
    console.log('ngAfterViewInit',this.divElement);
  }
  ngAfterViewChecked(): void {
    //Cada vez que se actualiza la vista
    // Acciones con el DOM
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy',this.divElement);
  }


  @Input({required: true}) todoData!: NTodo.TodoData;
  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();
  @ViewChild('divRef') divElement?:ElementRef;

  // Para seleccionar el primer elemento
  // @ContentChild('inputref') proyectedContent?:ElementRef<HTMLElement>;

  @ContentChild(InputComponent,{read: ElementRef}) proyectedContent?:ElementRef<HTMLElement>;
  // @ContentChildren(InputComponent,{read: ElementRef}) proyectedContent?:ElementRef<HTMLElement>;
  // @ContentChildren(InputComponent,{read: ElementRef}) proyectedContent?:QueryList<ElementRef>;
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
    // const elements = this.proyectedContent?.map(val => val);
    // console.log(elements);
  }

}
