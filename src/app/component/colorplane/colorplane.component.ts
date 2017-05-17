import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorplane',
  templateUrl: './colorplane.component.html',
  styleUrls: ['./colorplane.component.scss']
})
export class ColorplaneComponent implements OnInit {
  items: Array<object>;
  constructor() {
    this.items = [{
      name: '博客',
      class: 'bolg',
      text: '我步入丛林因为我希望生活得有意义 我希望活得深刻 吸取生命中所有的精华 把非生命的一切都击溃 以免当我生命终结 发现自己从没有活过'
    }, {
      name: '热门',
      class: 'hot'
    }, {
      name: '杂文',
      class: 'essay'
    }, {
      name: '交流',
      class: 'chat'
    }]
  }

  ngOnInit() {

  }

}
