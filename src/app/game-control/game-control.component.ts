import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() increment = new EventEmitter<number>();

  interval;
  number = 0;

  ngOnInit(): void {
  }

  start(){
    this.interval = setInterval(() =>{
      this.increment.emit(this.number++);
    },1000);
    console.log('1');
  }

  end(){
    clearInterval(this.interval);
  }
}
