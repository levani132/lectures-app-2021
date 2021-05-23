import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  @Output() increment = new EventEmitter<number>()
  interval;
  counter = 0;
  
  constructor() { }

  onStart() {
    this.interval = setInterval(() => { 
      this.increment.emit(this.counter++);
    }, 1000)
  }
  onStop() {
    clearInterval(this.interval);
  }
}
