import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  time: Date;
  constructor() { }

  ngOnInit() {
    this.initTime();
  }
  private initTime() {
    this.time = new Date();
  }
}
