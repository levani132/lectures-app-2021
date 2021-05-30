import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  
  @Output()
  increment = new EventEmitter<number>();
  
  interval;
  num = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

  start(){

    this.interval = setInterval(() => {

      this.num ++;

      this.increment.emit(this.num)
      
    }, 1000);

  }

  finish(){

    if (this.interval) {
      clearInterval(this.interval);
    }
  
  }

}
