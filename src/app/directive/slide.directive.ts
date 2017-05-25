import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appSlide]'
})
export class SlideDirective {
  moveStart: object;
  moveEnd: object;
  moveMove: object;
  moveType: number;//1为上滑动，0为下滑动，2左滑动，3右滑动;
  moveForm: number = 50;//滑动距离 默认为100;
  constructor(el: ElementRef) {
    console.log(el)
    // el.nativeElement.style.display ='none';
  }
  @HostListener('touchstart', ['$event', '$event.target'])
  touchstart(e: Touch, el: ElementRef) {
    var className = e['target']['className'];
    if (className.indexOf('accordion') > -1) {
      this.moveStart = {
        x: e['changedTouches'][0].clientX,
        y: e['changedTouches'][0].clientY
      }
    }
  }

  @HostListener('touchend', ['$event'])
  touchend(e: Touch, el: ElementRef) {
    var className = e['target']['className'];
    console.log(className)
    if (className.indexOf('accordion') > -1) {
      this.moveEnd = {
        x: e['changedTouches'][0].clientX,
        y: e['changedTouches'][0].clientY
      }
      console.log(this.moveEnd)
      // this.slideHandle(this.moveStart, this.moveEnd, e, this.changeStyle)
    }

  }

  @HostListener('touchmove', ['$event'])
  touchmove(e: Touch, el: ElementRef) {
      this.moveMove = {
        x: this.moveStart['x'] - e['changedTouches'][0].clientX,
        y: this.moveStart['y'] - e['changedTouches'][0].clientY
      }
      console.log(this.moveMove)
      if (this.moveMove['x'] > 0) {
      } else {
      }
      if (this.moveMove['y'] > 0) {
      
      } else {
      }
      var element = e['target']['childNodes'][1];
      var childHeight = element['clientHeight'] + element['offsetHeight'] + element['offsetTop'];
      var selfHeight=e['target']['clientHeight'];
      console.log(childHeight)
      console.log(selfHeight)
        if(selfHeight-this.moveMove['y']>childHeight){
         var reduceHeight=selfHeight-this.moveMove['y'];
          e['target']['style']['height']=reduceHeight+'px';
        }else{
          e['target']['style']['height']=childHeight+'px';
        }
    // if (className.indexOf('accordion') > -1) {
    //   this.moveEnd = {
    //     x: e['changedTouches'][0].clientX,
    //     y: e['changedTouches'][0].clientY
    //   }
    //   this.slideHandle(this.moveStart, this.moveEnd, e, this.changeStyle)
    // }

  }

  private slideHandle(moveStart: object, moveEnd: object, e: HostListener, fu: Function) {
    var slide = moveStart['y'] - moveEnd['y'];
    var lineslide = moveStart['x'] - moveEnd['x'];
    var sildeType = Math.abs(slide) > Math.abs(lineslide) ? 1 : 2
    switch (sildeType) {
      case 1:
        if (slide > 0 && slide > this.moveForm) {
          this.moveType = 1;
        } else if (slide < 0 && (-slide) > this.moveForm) {
          this.moveType = 0;
        }
        break;
      case 2:
        if (lineslide > 0 && (lineslide > this.moveForm)) {
          this.moveType = 2;
        } else if (lineslide < 0 && (-lineslide > this.moveForm)) {
          this.moveType = 3;
        }
        break;
    }
    fu(e['target'], this.moveType)
  }
  private changeStyle(el: ElementRef, moveType: number) {

    // if (moveType === 0) {
    //   el['style']['height'] = 100 + '%';
    // }
    // if (moveType === 1) {
    //   var element = el['childNodes'][1];
    //   var height = element['clientHeight'] + element['offsetHeight'] + element['offsetTop'];
    //   el['style']['height'] = height - 10 + 'px';
    // }

    // if (moveType === 2) {
    //   console.log('左')
    // }
    // if (moveType === 3) {
    //   console.log('右')
    // }

  }
}
