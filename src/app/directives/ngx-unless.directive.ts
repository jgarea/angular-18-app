import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgxUnless]',
  standalone: true
})
export class NgxUnlessDirective {

  constructor(
    private readonly temnplateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef
  ) { }

  

  @Input()  set appNgxUnless(visible: boolean) {
    console.log(visible);
    if(!visible) {
      this.viewContainerRef.createEmbeddedView(this.temnplateRef);
    } else {
      this.viewContainerRef.clear();
    }
    
  }

}
