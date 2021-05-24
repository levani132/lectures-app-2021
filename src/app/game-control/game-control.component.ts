import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from 'events';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() emitNum = new EventEmitter();
  gameInterval: any;
  emittedNum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.gameInterval = setInterval(() => {
      this.emitNum.emit(this.emittedNum++)
    }, 1000);
  }

  onEnd() {
    clearInterval(this.gameInterval);
  }

}
