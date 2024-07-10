import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';

@Directive({
  selector: '[appHighlighed]',
  standalone: true
})
export class HighlighedDirective {

  constructor() { }
    // console.log('HighlighedDirective created');
    // @HostBinding('className') 
    //   get cssClass() {
    //     return 'red-shadow';
    //   }
    // @HostBinding('class.red-shadow')
    //   get cssClass() {
    //     return true;
    //   }

    

    @Input() appHighlighed: boolean = false;

    @Output() onTogglehighlighted = new EventEmitter<boolean>();

    @HostBinding('class.red-shadow')
      get cssClass() {
        return this.appHighlighed;
      }
    @HostBinding('style.borderLeft')
      get cssStyle() {
        return '3px solid red';
      }
    @HostListener('mouseenter')
      onMouseEnter() {
        this.appHighlighed = true;
        this.onTogglehighlighted.emit(this.appHighlighed);
      }
    @HostListener('mouseleave')
      onMouseLeave() {
        this.appHighlighed = false;
        this.onTogglehighlighted.emit(this.appHighlighed);
      }

      onToggle() {
        this.appHighlighed = !this.appHighlighed;
        this.onTogglehighlighted.emit(this.appHighlighed);
      
      }
    // @HostListener('mouseenter',['$event'])
    //   onMouseEnter(event: MouseEvent) {
    //     console.log('Mouse Enter', event);
    //   }
}
