import { Directive,ElementRef,HostListener } from '@angular/core';
@Directive({
  selector: '[appSlide]'
})
export class SlideDirective {
  moveStart:object;
  moveEnd:object;
  moveType:number;//1为上滑动  0 为下滑动;
  moveForm:number=50;//滑动距离 默认为100;
  constructor(el:ElementRef) {
        // this.el.nativeElement.style.backgroundColor = color;
 }
  @HostListener('touchstart', ['$event','$event.target'])
    touchstart(e:Touch,el:ElementRef) {
      if(e['target']['className']=="cardTitle"){
        return false;
      }
     this.moveStart={
       x:e['changedTouches'][0].clientX,
       y:e['changedTouches'][0].clientY
     }
     
    }

    @HostListener('touchend', ['$event'])
    touchend(e:Touch,el:ElementRef) {
      if(e['target']['className']=="cardTitle"){
        return false;
      }
    this.moveEnd={
       x:e['changedTouches'][0].clientX,
       y:e['changedTouches'][0].clientY
    }
    console.log(e);
    this.slideHandle(this.moveStart,this.moveEnd,e,this.changeStyle)
  }

  private slideHandle(moveStart:object,moveEnd:object,e:HostListener,fu:Function){
    var slide=moveStart['y']-moveEnd['y'];
      if(slide>0&&slide>this.moveForm){
        this.moveType=1;
      }else if(slide<0&&(-slide)>this.moveForm){
        this.moveType=0;
      }
      console.log(this.moveType)
      switch(this.moveType){
        case 1:
        fu(e['target'],0)
        break;
        case 0:
        fu(e['target'],1)
        break;
      }
  }
  private changeStyle(el:ElementRef,moveType:number){
      if(moveType===1){
        el['style']['height']=100+'%';
      }
      if(moveType===0){
        var element=el['childNodes'][1];
        var height=element['clientHeight']+element['offsetHeight']+element['offsetTop'];
        el['style']['height']=height+10+'px';
      }
      
  }
}
