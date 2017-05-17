import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorplane',
  templateUrl: './colorplane.component.html',
  styleUrls: ['./colorplane.component.scss']
})
export class ColorplaneComponent implements OnInit {
  time:any;
  constructor() {
    this.initTime()
  }

  ngOnInit() {

  }
  private initTime(){
    var time=Math.random()*100000;
    this.time=new Date().toLocaleString();
    setInterval(function(){
   
    },1000)
  }

  private downTime(time:any){
   
  } 
}
