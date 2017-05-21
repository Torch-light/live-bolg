import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appOnresize]'
})
export class OnresizeDirective {

  constructor(el:ElementRef) { 
      console.log(el);
  }
  @HostListener('onresize',['$event'])
  onresize(e){
    console.log(e);
  }
}
