import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() LetsStart = new EventEmitter<number> ();
  counter = 0;
  rame = [];
  ref ;
  start(){
    this.ref = setInterval(()=>{
      this.LetsStart.emit(this.counter++) ;
      this.rame.push(this.counter);
      console.log(this.counter);
    },1000)
    
  }
  end(){
    clearInterval(this.ref);
  }


  constructor() {
    }
   
  ngOnInit(): void {
  }

}
