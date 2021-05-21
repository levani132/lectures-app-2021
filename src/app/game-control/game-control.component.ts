import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
interval;
@Output() extend = new EventEmitter<number>();
count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  start(){
    this.interval = setInterval(()=>{
      this.extend.emit(this.count++);
    },1000);
  }
  stop(){
    clearInterval(this.interval);
  }
  
}
