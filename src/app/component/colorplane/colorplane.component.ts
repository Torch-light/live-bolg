import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorplane',
  templateUrl: './colorplane.component.html',
  styleUrls: ['./colorplane.component.scss']
})
export class ColorplaneComponent implements OnInit {
  items: Array<object>;
  pageItem:Array<object>;
  anmite:object;
  constructor() {
  
    this.items = [{
      name: '博客',
      class: 'bolg',
      introduce: '博客即是艺术',
      details:'这是第2万篇博客',
      link:'bolg'
    }, {
      name: '热门',
      class: 'hot',
      introduce:'这是介绍',
      details:'这是详情',
      link:'hot'
    }, {
      name: '杂文',
      class: 'essay',
       introduce:'这是介绍',
      details:'这是详情',
      link:'essay'
    }, {
      name: '交流',
      class: 'chat',
       introduce:'这是介绍',
      details:'这是详情',
      link:'chat'
    }];
    this.anmite={
         class:''
    }
     this.changeItem()
  }

  ngOnInit() {

  }

  private setClass(){
     
  }

  private changeItem(){
      // let windowWidth=window.innerWidth;
      // if(windowWidth<500){
      //      this.pageItem=this.items;
      //   // this.pageItem=this.items.slice(0,2);
      // }else if(windowWidth<800){
      //   this.pageItem=this.items.slice(0,3);
      // }else{
      //   this.pageItem=this.items;
      // }
    
  }
}
