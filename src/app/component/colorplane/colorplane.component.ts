import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorplane',
  templateUrl: './colorplane.component.html',
  styleUrls: ['./colorplane.component.scss']
})
export class ColorplaneComponent implements OnInit {
  items: Array<object>;
  anmite:object;
  constructor() {
    this.items = [{
      name: '博客',
      class: 'bolg',
      introduce: '博客即是艺术',
      details:'这是第2万篇博客'

    }, {
      name: '热门',
      class: 'hot',
      introduce:'这是介绍',
      details:'这是详情'
    }, {
      name: '杂文',
      class: 'essay',
       introduce:'这是介绍',
      details:'这是详情'
    }, {
      name: '交流',
      class: 'chat',
       introduce:'这是介绍',
      details:'这是详情'
    }];
    this.anmite={
         class:''
    }
  }

  ngOnInit() {

  }

  private setClass(){
     
  }
}
