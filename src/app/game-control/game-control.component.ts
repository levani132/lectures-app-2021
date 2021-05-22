import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() start = new EventEmitter<null>();
  @Output() stop = new EventEmitter<null>(); 
  constructor() { }

  ngOnInit(): void {
  }

  startCount(){
    this.start.emit();
  }
  stopCount(){
    this.stop.emit();
  }
}
