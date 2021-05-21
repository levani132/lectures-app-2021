import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { O_SYMLINK } from 'constants';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  interval;
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // @Output() increment:EventEmitter<number> = new EventEmitter<number>();
@Output() increment = new EventEmitter<number>();

  start(){
    this.interval = setInterval(()=>{
      this.increment.emit(this.count++);
    },1000);
  }
  stop(){
    clearInterval(this.interval);
  }
}
