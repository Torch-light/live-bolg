import { Directive,ElementRef,HostListener } from '@angular/core';
@Directive({
  selector: '[appSlide]'
})
export class SlideDirective {
  moveStart:object;
  moveEnd:object;
  moveType:number;//1为上滑动，0为下滑动，2左滑动，3右滑动;
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
    this.slideHandle(this.moveStart,this.moveEnd,e,this.changeStyle)
  }

  private slideHandle(moveStart:object,moveEnd:object,e:HostListener,fu:Function){
    var slide=moveStart['y']-moveEnd['y'];
    var lineslide=moveStart['x']-moveEnd['x'];
    var sildeType=Math.abs(slide)>Math.abs(lineslide)?1:2
    console.log(lineslide)
    console.log(this.moveForm)
    switch(sildeType){
      case 1:
        if(slide>0&&slide>this.moveForm){
          this.moveType=1;
        }else if(slide<0&&(-slide)>this.moveForm){
          this.moveType=0;
        }
        break;
      case 2:
         if(lineslide>0&&(lineslide>this.moveForm)){
          this.moveType=2;
        }else if(lineslide<0&&(-lineslide>this.moveForm)){
          this.moveType=3;
        }
        break;
    }
        fu(e['target'],this.moveType)
  }
  private changeStyle(el:ElementRef,moveType:number){
      if(moveType===0){
        el['style']['height']=100+'%';
      }
      if(moveType===1){
        var element=el['childNodes'][1];
        var height=element['clientHeight']+element['offsetHeight']+element['offsetTop'];
        el['style']['height']=height-10+'px';
      }

      if(moveType===2){
        console.log('左')
      }
      if(moveType===3){
        console.log('右')
      }
      
  }
}
