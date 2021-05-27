import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: number[] = [0];
  status = false;
  timeoutRef;

  constructor() {

  }

  addCounter(){
    this.counter[0]++;
    this.status = true;
    clearTimeout(this.timeoutRef);
    this.timeoutRef = setTimeout(() =>{
      this.status = false
    },2000);
  }
}
