import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appOnresize]'
})
export class OnresizeDirective {

  constructor(el:ElementRef) { 
    this.changeWindowWidth(el)
  }
 
  
  private changeWindowWidth(el:ElementRef){
    console.log(window.innerWidth)
  }
}
